import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VixeText",
  tagline:
    "Conjunto de ferramentas de código aberto e fluxo de trabalho colaborativo para publicação acadêmica em Markdown, com CI/CD automatizado e totalmente gratuito.",
  favicon: "img/favicon.ico",
  url: "https://vixetext.com",
  baseUrl: "/",
  organizationName: "vixetext",
  projectName: "vixetext-template",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          includeCurrentVersion: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/vixetext/vixetext-template/tree/master/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: "G-XW7JZ56BFS",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-5D4XM9V7",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.8,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items
              .map((item) => ({
                ...item,
                priority: item.url.includes("/docs/") ? 1.0 : 0.8, // Prioriza docs principais
              }))
              .filter((item) => !item.url.includes("/page/"));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      image: "img/vixetext-social-card.jpg",

      metadata: [
        {
          name: "description",
          content:
            "VixeText é um conjunto de ferramentas de código aberto para publicação acadêmica em Markdown com CI/CD automatizado.",
        },
        {
          name: "keywords",
          content:
            "Markdown, publicação acadêmica, LaTeX, CI/CD, VixeText, Limarka",
        },
        {
          property: "og:title",
          content: "VixeText - Publicação Acadêmica com Markdown e CI/CD",
        },
        {
          property: "og:description",
          content:
            "Conjunto de ferramentas open-source para escrita acadêmica em Markdown, integrando CI/CD automatizado.",
        },
        {
          property: "og:image",
          content: "https://vixetext.com/img/vixetext-social-card.jpg",
        },
        { property: "og:url", content: "https://vixetext.com" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "VixeText - Markdown para Publicação Acadêmica",
        },
        {
          name: "twitter:description",
          content:
            "Plataforma de escrita acadêmica open-source com Markdown e CI/CD.",
        },
        {
          name: "twitter:image",
          content: "https://vixetext.com/img/vixetext-social-card.jpg",
        },
      ],

      algolia: {
        appId: 'XTRA0Z7Q21',
        apiKey: '19064cb0ab86b5f17db15fc704ae84da',
        indexName: 'vixetext',
        contextualSearch: true,
      },

      navbar: {
        title: "VixeText",
        logo: {
          alt: "VixeText Logo",
          src: "img/logo.png",
          height: 32,
          width: 32,
        },
        items: [
          // left
          {
            label: "Documentação",
            to: "docs",
            position: "left",
          },
          {
            label: "Sobre",
            to: "sobre",
            position: "left",
          },
          {
            label: "Patrocinar",
            to: "patrocinador",
            position: "left",
          },
          {
            label: "Playground",
            href: "https://editor.vixetext.com",
            position: "left",
          },
          // right
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/vixetext/vixetext-template",
            position: "right",
            className: "header-github-link",
          },
        ],
      },

      announcementBar: {
        id: 'announcement-bar',
        content:
          '💬 Participe! Junte-se à comunidade do VixeText e ajude a melhorar a ferramenta. <a target="_blank" rel="noopener noreferrer" href="https://github.com/vixetext/vixetext-template/discussions">Entrar na comunidade</a>',
      },

      footer: {
        // use 'dark' ou 'light' – a cor real vamos forçar via CSS abaixo
        style: 'dark',

        logo: {
          alt: 'VixeText',
          src: 'img/logo-text-dark.png',
          href: '/', // link do logo
          width: 120,
          height: 32,
        },

        links: [
          {
            title: 'VixeText',
            items: [
              { label: 'Sobre', to: '/sobre' },
              // { label: 'Blog', to: '/blog' },
              { label: 'Patrocinar', to: '/patrocinador' },
            ],
          },
          {
            title: 'Soluções',
            items: [
              { label: 'Para estudantes', to: '/solucoes/para-estudantes' },
              { label: 'Para professores', to: '/solucoes/para-professores' },
              { label: 'Templates', to: '/category/tipos-de-trabalhos' },
            ],
          },
          {
            title: 'Aprender',
            items: [
              { label: 'Comece em 30 min', to: '/comecando/guia-de-inicio-rapido' },
              { label: 'Tutoriais', to: '/comecando/tutorial' },
              { label: 'Citações/BibTeX', to: '/criando-um-documento/elementos-pos-textuais/referencias' },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              { label: 'GitHub', href: 'https://github.com/vixetext/vixetext-template/discussions' },
              { label: 'Discord', href: 'https://discord.gg/abcdef123456' },
            ],
          },
          {
            title: 'Ajuda',
            items: [
              { label: 'Documentação', to: '/docs' },
              { label: 'Licença do software', href: 'https://github.com/vixetext/vixetext-template/blob/master/LICENSE' },
            ],
          },
        ],

        copyright: `
        © ${new Date().getFullYear()} VixeText · Feito com ❤️ para estudantes e pesquisadores.
        `,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["powershell", "bash", "json", "yaml", "markdown"],
      },
    }),

  plugins: [
    require.resolve('./plugins/tailwindPlugin'),
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      "vercel-analytics",
      {
        debug: true,
        mode: "auto",
      },
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://vixetext.com",
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'img/favicon/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'img/favicon/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'img/favicon/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: 'img/favicon/site.webmanifest',
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "VixeText",
        url: "https://vixetext.com",
        description:
          "VixeText é um conjunto de ferramentas de código aberto para publicação acadêmica em Markdown com CI/CD automatizado.",
        image: "https://vixetext.com/img/vixetext-social-card.jpg",
        applicationCategory: "Publishing",
        operatingSystem: "All",
        author: {
          "@type": "Person",
          name: "ReinanHS",
          url: "https://github.com/ReinanHS",
        },
        publisher: {
          "@type": "Organization",
          name: "VixeText",
          url: "https://vixetext.com",
        },
      }),
    },
  ],
};

export default config;
