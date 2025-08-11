// tailwind.config.js (v4)
module.exports = {
  /** Diga ao Tailwind para usar o seletor do Docusaurus */
  darkMode: 'selector',
  darkModeSelector: '[data-theme="dark"]',

  // Recomendo explicitar o conteúdo pra evitar tree-shake indevido:
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    './node_modules/@docusaurus/theme-classic/**/*.js',
    './node_modules/@docusaurus/theme-classic/**/*.tsx',
  ],
};
