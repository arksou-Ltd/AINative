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
      imgSize: true,
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
    // 禁用默认 Sidebar，改用自定义导航组件
    sidebar: false,
    docsDir: 'docs',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    themePlugins: { git: false, seo: false },
    tip: '提示', warning: '注意', danger: '警告',
  }),
  bundler: viteBundler({}),
})