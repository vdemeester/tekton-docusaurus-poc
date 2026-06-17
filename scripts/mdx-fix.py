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
    # 3/6. ALL angle brackets -> entity-escaped. Synced docs use no JSX, so the
    # safe transform is to treat every < > as literal. NOTE: this degrades real
    # raw-HTML tables/<br> to literal text (content-fidelity loss; see writeup).
    if "<" in out:
        counts["angle_escaped"] += out.count("<")
        out = out.replace("<", "&lt;")
    return out

def process(path):
    src = open(path, encoding="utf-8").read()
    # Global pre-pass: Hugo/Docsy shortcodes ({{< >}} / {{% %}}) are layout
    # directives that never belong in code output. Strip them everywhere so a
    # mis-detected code fence can't leave raw `{{` to break the MDX parser.
    src2 = re.sub(r"\{\{[<%].*?[%>]\}\}", "", src, flags=re.S)
    if src2 != src:
        counts["hugo_shortcode_stripped"] += 1
        src = src2
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
    if new != src:
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
