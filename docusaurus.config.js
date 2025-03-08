import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VixeText",
  tagline:
    "Conjunto de ferramentas de código aberto e fluxo de trabalho colaborativo para publicação acadêmica em Markdown, com CI/CD automatizado e totalmente gratuito.",
  favicon: "img/favicon.ico",
  url: "https://vixetext.com",
  baseUrl: "/",
  organizationName: "reinanhs",
  projectName: "limarka-template-tcc",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: { experimental_faster: true },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          includeCurrentVersion: false,
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/ReinanHS/limarka-template-tcc/tree/${versionDocsDirPath.replace(
              "versioned_docs/version-",
              "v"
            )}/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-999X9XX9XX",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-12345",
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
        defaultMode: "dark",
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
          // right
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/reinanhs/limarka-template-tcc",
            position: "right",
            className: "header-github-link",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Comunidade",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/limarka",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/limarka",
              },
              {
                label: "Github Discussions",
                href: "https://github.com/ReinanHS/limarka-template-tcc/discussions",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ReinanHS, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["powershell", "bash", "json", "yaml", "markdown"],
      },
    }),

  plugins: [
    ["./src/plugins/tailwind-config.js", {}],
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
