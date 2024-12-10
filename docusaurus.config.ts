import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes} from 'prism-react-renderer';

import convertAnchor from './src/remark/convert-anchor';

const config: Config = {
  title: 'blog.jmk.im',
  tagline: `jmkim0's blog`,
  url: 'https://blog.jmk.im',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  future: {
    experimental_faster: true,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content/10 Wiki',
          routeBasePath: 'wiki',
          sidebarPath: require.resolve('./sidebars.ts'),
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath, convertAnchor],
          rehypePlugins: [rehypeKatex],
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);

            function stripNumberPrefix(item) {
              const regex = /^\d{2}(?:\.\d+)? (.+)/;
              if (item.type === 'doc') {
                const match = regex.exec(item.label);
                return {...item, label: match ? match[1] : item.label};
              } else if (item.type === 'category') {
                const match = regex.exec(item.label);
                return {
                  ...item,
                  label: match ? match[1] : item.label,
                  items: item.items.map(stripNumberPrefix),
                };
              }
              return item;
            }

            return items.map(stripNumberPrefix);
          },
        },
        blog: {
          path: 'content/20 Posts',
          blogTitle: 'Posts',
          blogDescription: 'Posts',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          routeBasePath: 'posts',
          postsPerPage: 5,
          remarkPlugins: [remarkMath, convertAnchor],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: null,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'blog.jmk.im',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: '/posts',
          position: 'left',
          label: 'Posts',
        },
        {
          href: 'https://github.com/jmkim0/blog',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Wiki Tags',
          to: 'wiki/tags',
        },
        {
          label: 'Posts Tags',
          to: 'posts/tags',
        },
        {
          label: 'Posts Archive',
          to: 'posts/archive',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} jmkim0. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: [
        'bash',
        'diff',
        'json',
        'java',
        'gradle',
        'docker',
        'nginx',
      ],
    },
    algolia: {
      appId: 'ZA8YY0YWBO',
      apiKey: '7f053bbd3a4e0d2f03c73d5409e31ccf',
      indexName: 'jmk',
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    format: 'detect',
    mermaid: true,
    async parseFrontMatter(params) {
      const result = await params.defaultParseFrontMatter(params);
      const path = /(?:10 Wiki|20 Posts)(.*).md/.exec(params.filePath)[1];

      result.frontMatter.slug = path
        .replaceAll(/\/\d{2}(?:\.\d+)? /g, '/')
        .replace(/(\d{4})-(\d{2})-(\d{2}) /, '$1/$2/$3/')
        .replaceAll(' ', '+')
        .replace(/\/(?:index|readme)$/i, '');

      return result;
    },
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: 'any',
        href: '/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/icon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    },
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
