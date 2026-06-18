// PoC (tektoncd/website#732): mark which docs instance is active so the navbar
// can show only the relevant version dropdown (labeled), instead of N identical
// unlabeled dropdowns. This keeps the version switcher usable as the number of
// components grows.
function setActiveDocs(pathname) {
  let active = '';
  // Match the component segment regardless of any baseUrl prefix
  // (e.g. /tekton-docusaurus-poc/pipelines/... on GitHub Pages).
  const m = pathname.match(/(?:^|\/)(pipelines|operator|guides)(\/|$)/);
  if (m) active = m[1];
  document.documentElement.setAttribute('data-active-docs', active);
}

if (typeof window !== 'undefined') {
  setActiveDocs(window.location.pathname);
}

export function onRouteDidUpdate({location}) {
  setActiveDocs(location.pathname);
}
