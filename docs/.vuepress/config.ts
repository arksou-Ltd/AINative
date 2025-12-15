import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 站点配置
  base: '/AINative/',
  lang: 'zh-CN',
  title: 'AINative',
  description: 'AI Native知识分享平台 - 理解并实践AI Native转型',

  // HTML head配置
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'AI Native, AI转型, 企业数字化, 知识分享' }],
    ['meta', { name: 'author', content: 'AINative Team' }],
    ['link', { rel: 'icon', href: '/AINative/favicon.ico' }],
  ],

  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],

    // 侧边栏
    sidebar: {},

    // 仓库配置
    repo: 'your-org/AINative',
    docsDir: 'docs',
    editLink: false,

    // 页面元信息
    lastUpdated: false,
    contributors: false,

    // 主题内置插件开关
    themePlugins: {
      git: false,
      seo: false,
    },

    // 提示文本
    tip: '提示',
    warning: '注意',
    danger: '警告',
  }),

  // 构建配置
  bundler: viteBundler({}),
})

