import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Tekton website Docusaurus PoC (tracking: tektoncd/website#732)
// Three docs instances:
//  - pipelines (synced, versioned)  -> tests multi-version synced docs
//  - operator  (synced, versioned)  -> different version cadence
//  - guides    (hand-authored)      -> website-owned cross-component content

const config: Config = {
  title: 'Tekton (Docusaurus PoC)',
  tagline: 'Multi-version docs evaluation',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: 'https://tekton.dev',
  baseUrl: '/',
  organizationName: 'tektoncd',
  projectName: 'website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        // disable the default docs instance; we declare our own below
        docs: false,
        blog: {
          showReadingTime: true,
          blogTitle: 'Tekton Blog',
          blogSidebarTitle: 'Recent posts',
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  clientModules: ['./src/clientModules/activeDocs.ts'],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        // index every docs instance (versioned content included)
        docsRouteBasePath: ['pipelines', 'operator', 'guides'],
        // multi-instance setups have no "default" docs plugin; the search
        // SearchBar needs to be told which instance drives preferred version.
        docsPluginIdForPreferredVersion: 'pipelines',
        indexBlog: false,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pipelines',
        path: 'pipelines',
        routeBasePath: 'pipelines',
        sidebarPath: './sidebars.ts',
        lastVersion: '1.12.x',
        versions: {
          current: {label: 'main', path: 'main', banner: 'unreleased'},
          '1.12.x': {banner: 'none'},
          '1.9.x': {banner: 'none'},
          '1.0.x': {banner: 'none'},
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'operator',
        path: 'operator',
        routeBasePath: 'operator',
        sidebarPath: './sidebars.ts',
        lastVersion: '0.79.x',
        versions: {
          current: {label: 'main', path: 'main', banner: 'unreleased'},
          '0.79.x': {banner: 'none'},
          '0.78.x': {banner: 'none'},
          '0.76.x': {banner: 'none'},
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Tekton PoC',
      logo: {alt: 'Tekton', src: 'img/logo.svg'},
      items: [
        {
          type: 'dropdown',
          label: 'Documentation',
          position: 'left',
          items: [
            {to: '/pipelines/', label: 'Pipelines'},
            {to: '/operator/', label: 'Operator'},
            {to: '/guides/', label: 'Guides'},
          ],
        },
        {to: '/community', label: 'Community', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'pipelines',
          position: 'right',
          className: 'navbar-version--pipelines',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'operator',
          position: 'right',
          className: 'navbar-version--operator',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/tektoncd/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Tekton Docusaurus PoC — evaluation only. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
