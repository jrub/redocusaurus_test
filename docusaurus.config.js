// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quaderno developers',
  tagline: 'Automate tax compliance worldwide with our powerful API',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    // include redocusaurus
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'openapi/openapi.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#46B29D',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Quaderno developers',
        logo: {
          alt: 'My Site Logo',
          src: 'img/quaderno_icon_full_color.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          { to: '/api', label: 'API Reference', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Guides (comming soon)',
                to: '/',
              },
              {
                label: 'API Reference',
                to: '/', // '/api'
              },
              {
                label: 'Quaderno connect',
                href: 'https://quaderno.notion.site/Quaderno-Connect-0994ef66ef264136a2087f7f2b0c3b3b',
              },
            ],
          },
          {
            title: 'Tax resources',
            items: [
              {
                label: 'Quaderno Blog',
                href: 'https://www.quaderno.io/blog',
              },
              {
                label: 'Free Tax Guides',
                href: 'https://www.quaderno.io/digital-tax-guides',
              },
              {
                label: 'Sales Tax Calculator',
                href: 'https://www.quaderno.io/sales-tax-calculator',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Quaderno',
                to: 'https://www.quaderno.io/about-quaderno',
              },
              {
                label: 'Support Center',
                href: 'https://support.quaderno.io',
              },
              {
                label: 'Status',
                href: 'https://quaderno.statuspage.io',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Quaderno. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
