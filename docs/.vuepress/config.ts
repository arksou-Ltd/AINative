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
      {
        text: 'AI Native 简述',
        link: '/ai-native-intro/',
      },
    ],

    // 侧边栏
    sidebar: {
      '/ai-native-intro/': [
        { text: '导航', link: '/ai-native-intro/', children: [] },
        { text: '核心 Hook', link: '/ai-native-intro/core-hook', children: [] },
        { text: '第一性原理', link: '/ai-native-intro/first-principles', children: [] },
        { text: '核心类比', link: '/ai-native-intro/core-analogy', children: [] },
        { text: '60-80-100 模型', link: '/ai-native-intro/60-80-100-model', children: [] },
        { text: 'Why Now', link: '/ai-native-intro/why-now', children: [] },
      ],
      '/': [],
    },

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
