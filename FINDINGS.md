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
- **Hugo front-matter extraction** — synced docs hide their front matter in an
  HTML comment; the fixer turns `linkTitle`/`weight` into Docusaurus
  `sidebar_label`/`sidebar_position` (264/339 files), as `sync.py` does.
- **Local search** (`@easyops-cn/docusaurus-search-local`).
- **Theming spike** — Tekton blue via Infima CSS variables only.
- **Homepage + Community + Blog** pages mirroring the current tekton.dev IA.
- **Live deployment** — public on GitHub Pages with an auto-deploy workflow:
  **https://vdemeester.github.io/tekton-docusaurus-poc/**

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

### Docsy build-time shortcodes — CONTENT LOSS without translation
The synced docs use Docsy shortcodes that **compose content at build time**:

| Shortcode | What it does | Without handling |
|---|---|---|
| `{{% readfile "/vendor/..." %}}` | Inlines content from the **website repo's** `vendor/` tree (GCP/OpenShift install steps, disclaimers) | **Content silently dropped** — the install page lost 2 of 3 platform tabs entirely |
| `{{% tabs %}}`/`{{% tab "X" %}}` | Platform-specific tabbed sections (K8s / Google Cloud / OpenShift) | Flattened to just the first tab |
| `{{% pageinfo %}}` | Info/disclaimer banner | Removed |
| `{{% comment %}}` | Build-time-only comments | (dropped, harmless) |

- **Fix in PoC:** `readfile` → inline the vendor partial; `tabs`/`tab` →
  Docusaurus `<Tabs>`/`<TabItem>` (first-class, documented feature with synced
  `groupId` tab groups — actually **better** than Docsy's); `pageinfo` →
  `:::info` admonition; `comment` → dropped.
- **Scope:** `readfile` appears in 4 files, `tabs` in 12, `pageinfo` in 4.
- **Key insight:** the synced docs reference content that **only exists in the
  website repo** (`content/en/vendor/`). Any migration must bring those vendor
  partials along and replicate the composition. This is invisible until you
  compare the rendered output against the live site.

### Front-matter convention of synced docs — A CORE SYNC-PARITY FINDING
Upstream Tekton component docs (`tektoncd/pipeline`, `tektoncd/operator`, …)
store their Hugo front matter **commented out** so it doesn't render on GitHub:
```
<!--
---
linkTitle: "Container Contract"
weight: 401
---
-->
```
- `sync.py` **uncomments** this block so Hugo/Docsy gets `linkTitle` (nav label)
  and `weight` (ordering). A naive MDX pass that converts `<!-- -->` to an MDX
  comment **hides the front matter from Docusaurus**, which then falls back to
  the **filename** for the sidebar label and **ignores ordering** entirely.
- This affects **264 / 339 files** — i.e. it is the norm, not an edge case.
- **Fix in PoC:** `mdx-fix.py` extracts the commented block and emits real
  Docusaurus front matter: `linkTitle → sidebar_label` (+ `title` when the body
  has no H1, to avoid a duplicate heading) and `weight → sidebar_position`.
- **Takeaway:** any Docusaurus migration must replicate this specific `sync.py`
  behaviour. It is the clearest example that the synced content carries
  **Hugo/Docsy-specific conventions** the website tooling is responsible for
  translating — the work doesn't disappear, it moves into remark/preprocessing.

### MDX migration of synced Markdown — THE REAL COST
The synced component Markdown is **not MDX-clean**. A preprocessing pass
(`scripts/mdx-fix.py`, the remark-plugin-equivalent) was required. Per-category
fixes across 341 files:

| Category | Fixes | Notes |
|---|---|---|
| Hugo front matter extracted (comment → real) | 264 | `linkTitle`→`sidebar_label`, `weight`→`sidebar_position` |
| Docsy shortcodes translated | 12+4+4 | `tabs`→`<Tabs>`, `readfile`→inline, `pageinfo`→`:::info` |
| Vendor partials inlined (`readfile`) | 12 | GCP/OpenShift install steps, disclaimers |
| `<!-- -->` HTML comments → `{/* */}` | 72 | remaining non-front-matter comments |
| Angle brackets `<...>` escaped | ~77,900 | placeholders `<name>`, `<key:value>`, stray HTML |
| Curly braces `{ }` escaped | 376 | MDX reads `{` as a JS expression |
| HTML `<table>` → Markdown (pandoc) | 744 | so tables actually render (see below) |
| Hugo/Docsy shortcodes stripped (remaining) | 28 files | `{{< >}}` shortcodes not covered above |
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

### Deployment & hosting — WORKS, with a baseUrl gotcha
- The PoC is **publicly hosted on GitHub Pages**
  (**https://vdemeester.github.io/tekton-docusaurus-poc/**) via a GitHub Actions
  workflow that installs pandoc, runs `layout.sh` + `mdx-fix.py`, builds, and
  deploys. This proves the throwaway reproduces in a **clean CI environment**,
  not just locally.
- **baseUrl gotcha (real finding):** the contextual version-dropdown logic
  matched the URL with `^/(pipelines|operator|guides)`, which silently broke on
  GitHub Pages because every path is prefixed with the project baseUrl
  (`/tekton-docusaurus-poc/…`). Client-side path logic must be **baseUrl-aware**.
  tekton.dev itself is at domain root, but any staging/preview-path deploy is
  not — so this class of bug must be watched for.
- **Account-level custom-domain caveat (ops, not Docusaurus):** project pages
  redirect to whatever custom domain the user/org Pages site declares; a stale
  `CNAME` elsewhere can hijack the URL. Worth noting for tekton.dev's own DNS.

### Static-serving quirk
- `docusaurus serve` 404s on version paths containing dots (`/pipelines/1.9.x/`)
  while `/pipelines/main/` works — `.x` is treated as a file extension. The HTML
  builds fine and **GitHub Pages serves these paths correctly** (directory
  `index.html`), so it's a local-`serve`-only quirk. Still, recommend
  sanitizing version slugs (e.g. `v1.9` not `1.9.x`) to avoid host edge cases.

## Bottom line

Confirms the going-in hypothesis: **versioning is genuinely cleaner in
Docusaurus, and it uniquely enables website-owned cross-component guides — but
the real cost is the content pipeline, not the framework.** Specifically:
1. **MDX migration of synced Markdown** (~80% of files touched), including
   replicating `sync.py`'s **front-matter extraction** (264/339 files hide Hugo
   front matter in comments), converting **raw HTML tables** (solved with
   pandoc; non-table inline HTML still degrades), and translating **Docsy
   build-time shortcodes** (`readfile`/`tabs`/`pageinfo` — without which
   vendor content like the GCP/OpenShift install tabs is silently dropped).
2. **Rebuilding the sync post-processing as remark plugins** — the fix-category
   catalogue above *is* the spec (front-matter, shortcodes, tables, escaping).
3. **Link rewriting + redirects** (Hugo relative links / `{{< ref >}}` break).
4. A **weaker out-of-box versioned-search** story (#191).
5. Smaller traps: contextual version-switcher UX, EOL data must be computed,
   and baseUrl-aware client logic.

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
