import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'AI-Native Textbook for Robotics Engineering',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://hibasheikh.github.io',
  // Base URL - adjust to match your GitHub Pages path
  baseUrl: '/hackathon_book/',

  // GitHub Pages deployment config
  organizationName: 'hibasheikh90', // GitHub username
  projectName: 'hackathon_book', // Repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // // Internationalization
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ur'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //       htmlLang: 'en-US',
  //     },
  //     ur: {
  //       label: 'اردو',
  //       direction: 'rtl',
  //       htmlLang: 'ur-PK',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/hibasheikh90/hackathon_book/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/hibasheikh90/hackathon_book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Modules',
          items: [
            {
              label: 'Module 1: ROS 2 Fundamentals',
              to: '/module-1-ros2/week-1/chapter-1-intro',
            },
            {
              label: 'Module 2: Digital Twin Simulation',
              to: '/module-2-simulation/week-5/chapter-9-intro-gazebo',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Prerequisites',
              to: '/prerequisites',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
            {
              label: 'Glossary',
              to: '/glossary',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hibasheikh90/hackathon_book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'markup', 'json', 'csharp'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
