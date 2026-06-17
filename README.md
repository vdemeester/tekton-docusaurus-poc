# Tekton Website — Docusaurus PoC

Throwaway proof-of-concept evaluating Docusaurus for the tekton.dev revamp.
Tracking issue: https://github.com/tektoncd/website/issues/732

**Decision PoC (not an adoption track).** Evidence-gathering only.

## What it exercises
- **Multi-version synced docs**: two instances with different cadences —
  `pipelines` (main + 1.12.x + 1.9.x) and `operator` (main + 0.79.x + 0.78.x).
- **Cross-component, website-authored content**: the `guides/` instance
  (content with no component release tag — impossible under today's per-component sync).
- **Per-component deprecation banner**: `src/data/support-policy.json` +
  swizzled `DocVersionBanner`.
- **Local search**, **theming spike** (Tekton blue via Infima vars).

## Reproduce
```bash
npm install
bash scripts/layout.sh      # lay out instances from _src/ upstream docs
python3 scripts/mdx-fix.py  # MDX-compat fixer (prints per-category fix counts)
npm run build
```

See `FINDINGS.md` for the evaluation writeup feeding #732.
