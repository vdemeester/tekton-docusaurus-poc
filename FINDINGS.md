# Docusaurus PoC — Findings for tektoncd/website#732

**Date:** 2026-06-17
**Author:** vdemeester (PoC)
**Scope:** Decision-PoC (evidence only; code is throwaway). Evaluate Docusaurus
fit for the tekton.dev revamp vs the current Hugo + Docsy + `sync.py` stack.
**Not in scope:** a decision, pixel-matching the proposed refresh, production sync.

## What was built

- **Docusaurus 3.10.1** (classic, TypeScript), Node 24.
- **Two synced, versioned docs instances with different cadences:**
  - `pipelines`: `main` + `1.12.x` + `1.9.x` + `1.0.x` (sparse v1.x LTS branches)
  - `operator`: `main` + `0.79.x` + `0.78.x` + `0.76.x` (dense v0.7x train)
  - Content pulled from upstream `tektoncd/pipeline` and `tektoncd/operator` at
    the real release branches (341 Markdown files total).
  - Docs default to the **latest LTS release** (`/pipelines/` → 1.12.x); `main`
    is the "next/unreleased" version, matching today's tekton.dev behaviour.
- **One hand-authored, cross-component instance** (`guides/`) — content that
  spans Pipelines + Chains + CLI and has **no component release tag**. This is
  the IA need today's per-component sync cannot express.
- **Per-component End-of-Life banner** driven by `src/data/support-policy.json`
  (carries the **real EOL dates** from each component's upstream `releases.md`),
  rendered via a swizzled `DocVersionBanner` that computes supported-vs-EOL at
  render time.
- **HTML→Markdown table conversion** via pandoc in the preprocessing pass.
- **Local search** (`@easyops-cn/docusaurus-search-local`).
- **Theming spike** — Tekton blue via Infima CSS variables only.
- **Homepage + Community + Blog** pages mirroring the current tekton.dev IA.

Reproduce: `npm install && bash scripts/layout.sh && python3 scripts/mdx-fix.py && npm run build`
(`scripts/mdx-fix.py` uses **pandoc** for HTML→Markdown table conversion.)

## Results by criterion

### Versioning — STRONG for Docusaurus
- Per-instance versioning is first-class. Two instances with **independent
  version dropdowns and different cadences** worked with ~10 lines of config each.
- File layout convention: `<id>_versioned_docs/version-<v>/`,
  `<id>_versioned_sidebars/`, `<id>_versions.json`. Maps cleanly onto what
  `sync.py` already produces (latest → current dir, older → versioned dirs),
  replacing the bespoke Hugo `vault/` mechanism.
- Built-in `banner: unreleased|unmaintained` per version is available for free.
- This is materially cleaner than the current Hugo + `vault/` + custom version
  selector partials.

### Default version — LATEST RELEASE, not `main`
- Docs default to the latest LTS release (`/pipelines/` serves 1.12.x), with
  `main` available as the "next/unreleased" version carrying the built-in
  `unreleased` banner. This matches today's tekton.dev (docs land on newest
  stable). Controlled by Docusaurus `lastVersion` + per-version `path`.

### Custom End-of-Life banner — WORKS, and must be EOL-date-driven
- `support-policy.json` carries the **real EOL dates** from each component's
  upstream `releases.md`; the swizzled `DocVersionBanner` computes
  supported-vs-EOL by comparing `eol` to the current date at render time.
- **Lesson learned the hard way:** an earlier draft hand-flagged versions as
  "deprecated" and wrongly marked still-supported LTS releases (e.g. Pipelines
  1.9.x and 1.6.x — both have future EOLs) as unsupported. Tekton supports
  **4 LTS + latest concurrently**, so almost all *synced* versions are
  currently supported. Only genuinely past-EOL releases must show the banner
  (in the PoC: Pipelines `1.0.x`, EOL 2026-04-29; Operator `0.76.x`,
  EOL 2026-05-27). Hardcoding status is a footgun — compute it.
- The built-in Docusaurus version banner was **disabled** on released versions
  (`banner: 'none'`) to avoid a double banner with the custom one.
- The exact per-component support policy is owned upstream
  (`releases.md` / `sync/config/*.yaml`); the website only needs to consume it.

### Navbar / version-dropdown UX — NEEDS a contextual pattern
- Naive approach = one `docsVersionDropdown` per component in the navbar. With
  2 components this is already ambiguous (two unlabeled "vX" dropdowns); it gets
  worse linearly as components are added (Tekton has ~9).
- **Fix applied in PoC:** a client module (`src/clientModules/activeDocs.ts`)
  tags `<html data-active-docs=...>` from the URL; CSS then shows **only the
  active component's** version dropdown and **prefixes it with the component
  name** ("Pipelines v1.9.x"). This keeps the switcher unambiguous and constant
  in size regardless of component count.
- IA was aligned to the current site: a single **Documentation ▾** dropdown
  (Pipelines / Operator / Guides) + **Community** + **Blog** tabs, and a
  homepage that mirrors the live "Cloud Native CI/CD" hero + feature blocks.
- Takeaway: multi-instance versioning works, but the navbar version-switcher UX
  is **not** good out of the box for many components and needs this kind of
  contextual treatment.

### MDX migration of synced Markdown — THE REAL COST
The synced component Markdown is **not MDX-clean**. A preprocessing pass
(`scripts/mdx-fix.py`, the remark-plugin-equivalent) was required. Per-category
fixes across 341 files:

| Category | Fixes | Notes |
|---|---|---|
| `<!-- -->` HTML comments → `{/* */}` | 600 | License header on ~every file |
| Angle brackets `<...>` escaped | ~77,900 | placeholders `<name>`, `<key:value>`, stray HTML |
| Curly braces `{ }` escaped | 904 | MDX reads `{` as a JS expression |
| HTML `<table>` → Markdown (pandoc) | 744 | so tables actually render (see below) |
| Hugo/Docsy shortcodes stripped | 28 files | `{{< >}}` / `{{% tabs %}}` tab blocks |
| Files modified | 276 / 341 | ~80% of files needed at least one fix |

**Raw HTML tables — solved with pandoc.** Many synced files (the v1.9 README,
`labels.md`, `auth.md`, `podtemplates.md`, …) use **raw HTML `<table>`**, not
Markdown tables. The first naive approaches both failed:
- *Blanket-escaping* every `<` makes the build green but renders tables as
  **literal escaped text** (this is the "tables don't render" symptom).
- *Passing HTML through* so MDX renders it **breaks the build** (20 failures):
  the source HTML is not MDX/JSX-valid — mismatched/again-cased tags like
  `<Code>` vs `</code>` and unclosed `<a name=…>` anchors.
- **Working fix:** convert `<table>…</table>` blocks to GitHub-flavoured
  Markdown with `pandoc -f html -t gfm` in the preprocessing pass (744 tables).
  Tables now render natively and the build stays green.

**Still-degraded HTML:** non-table inline raw HTML (`<br>`, `<a>`, `<div>`,
`<sub>`) is still blanket-escaped to literal text. A production migration must
convert or repair these per file — the pandoc trick covers tables (the most
visible case) but not everything.

**Internal links:** Hugo-style relative links (and Docsy `{{< ref >}}`) do not
resolve in Docusaurus — the first build flagged broken links. Link rewriting is
a required, non-trivial migration step (ties to redirects/SEO).

**Takeaway:** the catalogued categories above ARE the spec for the remark
plugins (and the pandoc table step) that would replace `sync.py`'s Docsy
post-processing. There is **no official Hugo→Docusaurus converter**;
`@docusaurus/migrate` only does v1→v2.

### Search — WEAKER THAN EXPECTED (relevant to #191)
- `@easyops-cn/docusaurus-search-local` builds an offline index (4 MB) and works.
- **Multi-instance gotcha:** it assumes a docs plugin with id `default`; our
  named-instance setup failed the build until `docsPluginIdForPreferredVersion`
  was set.
- **Versioned search gap:** by default it indexes **only the latest version per
  instance** (the default `main`/latest + `guides`); older versions are **not**
  indexed. Searching historical versions is not free — a real limitation given
  Tekton's multi-version emphasis. (Algolia DocSearch would index all but is a
  hosted dependency.)

### Build performance — GOOD
- Docs-only build (341 files, 8 versions): **~7–10 s** wall.
- Full production build incl. search indexing + pandoc table conversion:
  **~35–45 s** wall.
- Acceptable at current scale; search indexing dominates.

### Theming — EASY for palette, DEEPER for IA
- Tekton brand color + font swap = ~15 min of Infima CSS-variable edits, no
  component changes.
- Matching the proposed refresh's IA (hero, mega-menu, Solutions/Case-Studies)
  would require swizzling React components — a larger, separate effort. Note the
  proposed refresh is **still Hugo + custom theme**, so the visible revamp does
  *not* itself require leaving Hugo.

### kapa.ai — LOW IMPACT (confirmed)
- Not in the website repo today (no snippet in `layouts/`, `netlify.toml`).
- Generator-agnostic: widget is a `<script>` (trivial to add to Docusaurus via
  `scripts` or a swizzled Root); ingestion crawls published URLs + GitHub.
- Only real action on migration: **re-point kapa sources + sitemap** to the new
  URL structure and re-crawl. Same redirect/SEO concern any migration has.

### Static-serving quirk
- `docusaurus serve` 404s on version paths containing dots (`/pipelines/1.9.x/`)
  while `/pipelines/main/` works — `.x` is treated as a file extension. The HTML
  builds fine; recommend sanitizing version slugs (e.g. `v1.9` not `1.9.x`) to
  avoid host-specific edge cases.

## Bottom line

Confirms the going-in hypothesis: **versioning is genuinely cleaner in
Docusaurus, and it uniquely enables website-owned cross-component guides — but
the real cost is (1) MDX migration of synced Markdown (80% of files; 42 with
real HTML needing manual conversion), (2) rebuilding the sync post-processing as
remark plugins, (3) link rewriting + redirects, and (4) a weaker out-of-box
versioned-search story.**

For a CNCF project where Hugo+Docsy is the norm and the proposed visual refresh
is achievable in Hugo, the bar to migrate is real cost vs. the versioning/IA
upside. Recommend #732 weigh: *is cross-component guide authoring + cleaner
versioning worth a one-time multi-week content migration?*

## Suggested next steps (if pursued)
1. Repair/convert the remaining non-table raw HTML (`<br>`, `<a>`, `<div>`, …)
   on one instance; measure true effort (pandoc already covers tables).
2. Prototype the remark plugins from the fix-category catalogue (replace the
   throwaway `mdx-fix.py`), keeping the pandoc table step.
3. Spike Algolia DocSearch vs local search for full versioned coverage (#191).
4. Consume the upstream EOL data (`releases.md` / `sync/config/*.yaml`)
   directly to generate `support-policy.json` instead of hand-maintaining it.
5. Sanitize version slugs (e.g. `v1.9` not `1.9.x`) to avoid the dotted-path
   static-serving quirk.
6. File an upstream issue for the cross-component "guides" IA (none exists yet).
