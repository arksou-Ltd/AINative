import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: '/AINative/',
  lang: 'zh-CN',
  title: 'AINative - AI Native知识分享平台',
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
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '组件演示', link: '/story-context-demo' },
      { text: '第1章', link: '/1-introduction/' },
    ],
    // Sidebar disabled temporarily due to missing content files causing build errors
    sidebar: {}, 
    repo: 'your-org/AINative',
    docsDir: 'docs',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    themePlugins: { git: false, seo: false },
    tip: '提示', warning: '注意', danger: '警告',
  }),
  bundler: viteBundler({}),
})