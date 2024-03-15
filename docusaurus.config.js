// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Limarka Docs',
  tagline: 'Documentação para o modelo de trabalho acadêmico com o Limarka',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://reinanhs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/limarka-template-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'reinanhs', // Usually your GitHub org/user name.
  projectName: 'limarka-template-tcc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          includeCurrentVersion: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/ReinanHS/limarka-template-tcc/tree/${versionDocsDirPath.replace('versioned_docs/version-', 'v')}/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Limarka Docs',
        logo: {
          alt: 'Limarka Template TCC Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/reinanhs/limarka-template-tcc',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/limarka',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/limarka',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/ReinanHS/limarka-template-tcc/discussions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ReinanHS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
