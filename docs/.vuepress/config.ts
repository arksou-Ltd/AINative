import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: '/AINative/',
  lang: 'zh-CN',
  title: 'AI Native',
  description: '理解并实践AI Native转型',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'AI Native, AI转型, 企业数字化, 知识分享' }],
    ['meta', { name: 'author', content: 'AINative Team' }],
    ['link', { rel: 'icon', href: '/AINative/favicon.ico' }],
  ],
  plugins: [
    mdEnhancePlugin({
      revealJs: true,
    }),
  ],
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/arksou-Ltd' },
    ],
    // Sidebar configuration enabled
    sidebar: {
      '/1-introduction/': [
        {
          text: '第一章：介绍',
          children: [
            'README.md',
            'why-organizational-capability.md',
            'ai-native-brief.md',
            'simple-case-demo.md',
          ],
        },
      ],
      '/2-comparison/': [
        {
          text: '第二章：现状对比',
          children: ['README.md'],
        },
      ],
      '/3-core-definition/': [
        {
          text: '第三章：核心定义',
          children: [
            'README.md',
            'digital-workforce.md',
          ],
        },
      ],
      '/4-practice-demo/': [
        {
          text: '第四章：实践演示',
          children: ['README.md'],
        },
      ],
      '/5-transition-practice/': [
        {
          text: '第五章：转化路程',
          children: [
            'README.md',
            '5-1-organization-architecture/README.md',
            '5-2-core-practices/README.md',
          ],
        },
      ],
      '/6-outlook/': [
        {
          text: '第六章：展望',
          children: ['README.md'],
        },
      ],
      '/case-studies/': [
        {
          text: '案例研究',
          children: ['README.md'],
        },
      ],
    }, 
    docsDir: 'docs',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    themePlugins: { git: false, seo: false },
    tip: '提示', warning: '注意', danger: '警告',
  }),
  bundler: viteBundler({}),
})