#!/usr/bin/env python3
"""Instrumented MDX-compatibility fixer for the Docusaurus PoC (tektoncd/website#732).

Turns synced Hugo/Markdown into MDX-v3-parseable Markdown. Logs how many fixes
of each category were applied -> this catalogue is the spec for the eventual
remark plugins that would replace sync.py's Docsy post-processing.

Operates in-place on the docs instances. Idempotent-ish; re-run after layout.sh.
"""
import os, re, glob, sys
from collections import Counter

DIRS = ["pipelines", "pipelines_versioned_docs",
        "operator", "operator_versioned_docs", "guides"]
counts = Counter()

FENCE = re.compile(r"^(\s*)(```+|~~~+)")

def split_protect_inline(line):
    """Yield (text, is_code) segments splitting on inline `code` spans."""
    parts = re.split(r"(`[^`]*`)", line)
    for p in parts:
        yield (p, p.startswith("`") and p.endswith("`") and len(p) >= 2)

def fix_text(seg):
    out = seg
    # 5. Curly braces -> entity-escaped (MDX reads { as a JS expression).
    if "{" in out or "}" in out:
        counts["jsx_curly_escaped"] += out.count("{") + out.count("}")
        out = out.replace("{", "&#123;").replace("}", "&#125;")
    # 3/6. Remaining angle brackets -> entity-escaped. By this point real HTML
    # tables have already been converted to Markdown (see convert_tables), so
    # what's left behind `<` is overwhelmingly placeholders (<name>,
    # <key:value>) and stray/invalid HTML. Blanket-escaping keeps the build
    # green. NOTE: non-table raw HTML (<br>, <a>, ...) still degrades to text.
    if "<" in out:
        counts["angle_escaped"] += out.count("<")
        out = out.replace("<", "&lt;")
    return out


import shutil, subprocess
HAS_PANDOC = shutil.which("pandoc") is not None
TABLE_RE = re.compile(r"<table\b.*?</table>", re.I | re.S)

def convert_tables(text):
    """Convert raw HTML <table> blocks to GitHub-flavoured Markdown via pandoc
    so they render natively in MDX instead of being escaped to literal text."""
    if not HAS_PANDOC or "<table" not in text.lower():
        return text
    def repl(m):
        html = m.group(0)
        try:
            md = subprocess.run(
                ["pandoc", "-f", "html", "-t", "gfm"],
                input=html, capture_output=True, text=True, timeout=20,
            ).stdout.strip()
            if md:
                counts["html_table_converted"] += 1
                return "\n\n" + md + "\n\n"
        except Exception:
            pass
        return html
    return TABLE_RE.sub(repl, text)

# Leading commented-out Hugo front matter: <!-- \n --- \n ... \n --- \n -->
FM_RE = re.compile(r"\A\s*<!--\s*\n---\s*\n(.*?)\n---\s*\n-->\s*\n?", re.S)

def _yaml_val(body, key):
    m = re.search(rf"^{key}:\s*(.+?)\s*$", body, re.M)
    if not m:
        return None
    v = m.group(1).strip()
    if (v.startswith('"') and v.endswith('"')) or (v.startswith("'") and v.endswith("'")):
        v = v[1:-1]
    return v

def extract_frontmatter(text):
    """Turn the upstream commented-out Hugo front matter into real Docusaurus
    front matter (sidebar_label from linkTitle, sidebar_position from weight).
    This mirrors what sync.py does for Hugo, and fixes filename-as-title."""
    m = FM_RE.match(text)
    if not m:
        return text
    body = m.group(1)
    link_title = _yaml_val(body, "linkTitle") or _yaml_val(body, "title")
    weight = _yaml_val(body, "weight")
    rest = text[m.end():]
    has_h1 = re.search(r"^#\s+\S", rest, re.M) is not None
    fm = []
    if link_title:
        safe = link_title.replace("'", "''")
        fm.append(f"sidebar_label: '{safe}'")
        # Only set title when the body has no H1, to avoid a duplicate heading.
        if not has_h1:
            fm.append(f"title: '{safe}'")
    if weight and re.fullmatch(r"-?\d+", weight):
        fm.append(f"sidebar_position: {weight}")
    if not fm:
        return rest
    counts["frontmatter_extracted"] += 1
    return "---\n" + "\n".join(fm) + "\n---\n\n" + rest

def process(path):
    src = open(path, encoding="utf-8").read()
    original = src
    # Front matter extraction: upstream Tekton docs carry their Hugo front matter
    # COMMENTED OUT at the top (so it doesn't render on GitHub):
    #     <!--\n---\nlinkTitle: "..."\nweight: N\n---\n-->
    # sync.py uncomments this for Hugo/Docsy. Docusaurus needs REAL front matter,
    # so extract it and emit sidebar_label (linkTitle) + sidebar_position
    # (weight). Without this, Docusaurus falls back to the filename for the
    # sidebar label and ignores ordering. (264/339 files use this convention.)
    src = extract_frontmatter(src)
    # Global pre-pass: Hugo/Docsy shortcodes ({{< >}} / {{% %}}) are layout
    # directives that never belong in code output. Strip them everywhere so a
    # mis-detected code fence can't leave raw `{{` to break the MDX parser.
    src2 = re.sub(r"\{\{[<%].*?[%>]\}\}", "", src, flags=re.S)
    if src2 != src:
        counts["hugo_shortcode_stripped"] += 1
        src = src2
    # Convert raw HTML tables to Markdown so they render (the rest of the HTML
    # is escaped later; tables are the highest-value, most-visible case).
    src = convert_tables(src)
    lines = src.split("\n")
    in_fence = False
    fence_tok = None
    # frontmatter passthrough
    out_lines = []
    # join then handle multiline HTML comments first (outside fences is hard;
    # comments rarely span fences here) -> convert <!-- --> to {/* */}
    # We do comment conversion on the whole text but protect fenced blocks below,
    # so handle comments per-line state machine instead.
    in_comment = False
    for line in lines:
        m = FENCE.match(line)
        if m and (not in_fence or line.strip().startswith(fence_tok)):
            if not in_fence:
                in_fence = True; fence_tok = m.group(2)[0] * 3
            elif line.strip().startswith(fence_tok):
                in_fence = False; fence_tok = None
            out_lines.append(line); continue
        if in_fence:
            out_lines.append(line); continue

        # HTML comments -> MDX comments (handle single & multi-line)
        work = line
        if in_comment:
            if "-->" in work:
                work = work.replace("-->", "*/}", 1); in_comment = False
                counts["html_comment_converted"] += 1
            else:
                out_lines.append(work); continue
        # opening comments on this line
        while "<!--" in work:
            if "-->" in work[work.index("<!--"):]:
                work = work.replace("<!--", "{/*", 1).replace("-->", "*/}", 1)
                counts["html_comment_converted"] += 1
            else:
                work = work.replace("<!--", "{/*", 1); in_comment = True
                counts["html_comment_converted"] += 1
                break

        # transform non-code segments
        rebuilt = "".join(
            seg if is_code else fix_text(seg)
            for seg, is_code in split_protect_inline(work)
        )
        out_lines.append(rebuilt)

    new = "\n".join(out_lines)
    if new != original:
        open(path, "w", encoding="utf-8").write(new)
        counts["files_modified"] += 1

def main():
    files = []
    for d in DIRS:
        files += glob.glob(d + "/**/*.md", recursive=True)
    for f in files:
        process(f)
    print(f"files scanned : {len(files)}")
    for k in sorted(counts):
        print(f"  {counts[k]:5d}  {k}")

if __name__ == "__main__":
    main()
