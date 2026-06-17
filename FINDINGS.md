# Docusaurus PoC — Findings for tektoncd/website#732

**Date:** 2026-06-17
**Author:** vdemeester (PoC)
**Scope:** Decision-PoC (evidence only; code is throwaway). Evaluate Docusaurus
fit for the tekton.dev revamp vs the current Hugo + Docsy + `sync.py` stack.
**Not in scope:** a decision, pixel-matching the proposed refresh, production sync.

## What was built

- **Docusaurus 3.10.1** (classic, TypeScript), Node 24.
- **Two synced, versioned docs instances with different cadences:**
  - `pipelines`: `main` + `1.12.x` + `1.9.x` (sparse v1.x LTS branches)
  - `operator`: `main` + `0.79.x` + `0.78.x` (dense v0.7x train)
  - Content pulled from upstream `tektoncd/pipeline` and `tektoncd/operator` at
    the real release branches (260 Markdown files total).
- **One hand-authored, cross-component instance** (`guides/`) — content that
  spans Pipelines + Chains + CLI and has **no component release tag**. This is
  the IA need today's per-component sync cannot express.
- **Per-component deprecation banner** driven by `src/data/support-policy.json`
  (mirrors the `supportEnds`/`-LTS` data already in `sync/config/*.yaml`),
  rendered via a swizzled `DocVersionBanner`.
- **Local search** (`@easyops-cn/docusaurus-search-local`).
- **Theming spike** — Tekton blue via Infima CSS variables only.

Reproduce: `npm install && bash scripts/layout.sh && python3 scripts/mdx-fix.py && npm run build`

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

### Custom support/deprecation banner — WORKS
- `support-policy.json` + swizzled `DocVersionBanner` correctly shows a
  deprecation warning on **deprecated** versions (`pipelines/1.9.x`,
  `operator/0.78.x`) and is **absent** on supported ones (`1.12.x`, `0.79.x`).
- Confirms the requirement "warn in content when the doc version is
  out-of-support" is straightforward, and should be **data-driven per component**
  (the `supportEnds` data already exists upstream in `sync/config/operator.yaml`).

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
fixes across 260 files:

| Category | Fixes | Notes |
|---|---|---|
| `<!-- -->` HTML comments → `{/* */}` | 452 | License header on ~every file |
| Angle brackets `<...>` escaped | 64,819 | placeholders `<name>`, autolinks, **and real HTML** |
| Curly braces `{ }` escaped | 680 | MDX reads `{` as a JS expression |
| Hugo/Docsy shortcodes stripped | 21 files | `{{< >}}` / `{{% tabs %}}` tab blocks |
| Files modified | 208 / 260 | 80% of files needed at least one fix |

**Content-fidelity caveat:** 42 files contain *real* raw HTML (tables, `<br>`,
`<div>`). The safe blanket-escape makes them compile but **degrades them to
literal text**. A production migration must convert these to Markdown tables or
JSX — manual, per-file work the PoC deliberately did not do.

**Internal links:** Hugo-style relative links (and Docsy `{{< ref >}}`) do not
resolve in Docusaurus — the first build flagged broken links. Link rewriting is
a required, non-trivial migration step (ties to redirects/SEO).

**Takeaway:** the catalogued categories above ARE the spec for the remark
plugins that would replace `sync.py`'s Docsy post-processing. There is **no
official Hugo→Docusaurus converter**; `@docusaurus/migrate` only does v1→v2.

### Search — WEAKER THAN EXPECTED (relevant to #191)
- `@easyops-cn/docusaurus-search-local` builds an offline index (4 MB) and works.
- **Multi-instance gotcha:** it assumes a docs plugin with id `default`; our
  named-instance setup failed the build until `docsPluginIdForPreferredVersion`
  was set.
- **Versioned search gap:** by default it indexes **only the latest version per
  instance** (`main` + `guides` indexed; `1.9.x`/`1.12.x`/`0.78.x`/`0.79.x` are
  **not**). Searching historical versions is not free — a real limitation given
  Tekton's multi-version emphasis. (Algolia DocSearch would index all but is a
  hosted dependency.)

### Build performance — GOOD
- Docs-only build (260 files, 6 versions): **~7 s** wall.
- Full production build incl. search indexing: **~35–44 s** wall.
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
1. Convert the 42 raw-HTML files by hand on one instance; measure true effort.
2. Prototype the remark plugins from the fix-category catalogue (replace the
   throwaway `mdx-fix.py`).
3. Spike Algolia DocSearch vs local search for full versioned coverage (#191).
4. File an upstream issue for the cross-component "guides" IA (none exists yet).
