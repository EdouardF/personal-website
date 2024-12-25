module.exports = {
  title: 'Documentation du Projet',
  tagline: 'Une documentation claire et concise',
  url: 'https://votre-url.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'votre-organisation', // Remplacez par votre nom d'organisation
  projectName: 'nom-du-projet', // Remplacez par le nom de votre projet
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // chemin vers le fichier de configuration des documents
          editUrl: 'https://github.com/votre-organisation/nom-du-projet/edit/main/blog/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/votre-organisation/nom-du-projet/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
};