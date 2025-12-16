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
        text: '第1章：介绍',
        link: '/1-introduction/',
      },
      {
        text: '第2章：现状对比',
        link: '/2-comparison/',
      },
      {
        text: '第3章：核心定义',
        link: '/3-core-definition/',
      },
      {
        text: '第4章：实践演示',
        link: '/4-practice-demo/',
      },
      {
        text: '第5章：转化路程',
        link: '/5-transition-practice/',
      },
      {
        text: '第6章：展望',
        link: '/6-outlook/',
      },
      {
        text: '案例库',
        link: '/case-studies/',
      },
      {
        text: '演示模式',
        link: '/slides/1-introduction',
      },
    ],

    // 侧边栏
    sidebar: {
      /*
      // 第1章：介绍
      '/1-introduction/': [
        {
          text: '1. 介绍',
          link: '/1-introduction/',
        },
        {
          text: '为什么组织能力是壁垒',
          link: '/1-introduction/why-organizational-capability',
        },
        {
          text: 'AI Native 简述',
          link: '/1-introduction/ai-native-brief',
        },
        {
          text: '简单案例演示',
          link: '/1-introduction/simple-case-demo',
        },
      ],

      // 第2章：现状对比
      '/2-comparison/': [
        {
          text: '2. 现状对比',
          link: '/2-comparison/',
        },
        {
          text: '传统组织',
          link: '/2-comparison/traditional-organization',
        },
        {
          text: 'AI Native组织',
          link: '/2-comparison/ai-native-organization',
        },
      ],

      // 第3章：核心定义
      '/3-core-definition/': [
        {
          text: '3. 核心定义',
          link: '/3-core-definition/',
        },
        {
          text: 'Builder + AI团队',
          link: '/3-core-definition/builder-ai-team',
        },
        {
          text: '专业团队优化',
          link: '/3-core-definition/professional-optimization',
        },
        {
          text: '数字劳动力',
          link: '/3-core-definition/digital-workforce',
        },
        {
          text: '按结果分工',
          link: '/3-core-definition/result-oriented-division',
        },
      ],

      // 第4章：AI Native实践演示
      '/4-practice-demo/': [
        {
          text: '4. AI Native实践演示',
          link: '/4-practice-demo/',
        },
        {
          text: '演示概述',
          link: '/4-practice-demo/demo-overview',
        },
        {
          text: '工具链配置',
          link: '/4-practice-demo/toolchain-setup',
        },
        {
          text: '工作流演示',
          link: '/4-practice-demo/workflow-demonstration',
        },
        {
          text: '参考资源',
          link: '/4-practice-demo/reference',
        },
      ],

      // 第5章：过渡性转化路程实践
      '/5-transition-practice/': [
        {
          text: '5. 过渡性转化路程',
          link: '/5-transition-practice/',
        },
        {
          text: '5.1 组织架构与工作流程转型',
          collapsible: true,
          children: [
            {
              text: '标准型组织',
              link: '/5-transition-practice/5-1-organization-architecture/standard-model/',
            },
            {
              text: '过渡型组织',
              link: '/5-transition-practice/5-1-organization-architecture/transitional-model/',
            },
            {
              text: '过渡性实施路线',
              link: '/5-transition-practice/5-1-organization-architecture/transition-roadmap/',
            },
            {
              text: '产品开发7步流程',
              link: '/5-transition-practice/5-1-organization-architecture/transition-roadmap/product-development/',
            },
          ],
        },
        {
          text: '5.2 核心实践方法论',
          collapsible: true,
          children: [
            {
              text: 'BMAD-METHOD',
              link: '/5-transition-practice/5-2-core-practices/bmad-method/',
            },
            {
              text: 'Builder成长路径',
              link: '/5-transition-practice/5-2-core-practices/builder-growth-path',
            },
            {
              text: '工具栈指南',
              link: '/5-transition-practice/5-2-core-practices/tool-stack-guide',
            },
          ],
        },
      ],

      // 第6章：AI Native展望
      '/6-outlook/': [
        {
          text: '6. AI Native展望',
          link: '/6-outlook/',
        },
        {
          text: '场景区分',
          link: '/6-outlook/scenario-distinction',
        },
        {
          text: '路径1：Builder',
          link: '/6-outlook/path-1-builder',
        },
        {
          text: '路径2：专业顶尖',
          link: '/6-outlook/path-2-specialist',
        },
        {
          text: '保持适应性',
          link: '/6-outlook/staying-relevant',
        },
      ],

      // 案例库
      '/case-studies/': [
        {
          text: '案例库',
          link: '/case-studies/',
        },
        {
          text: '成功公司案例',
          collapsible: true,
          children: [
            {
              text: 'OpenAI',
              link: '/case-studies/success-companies/openai',
            },
            {
              text: 'Cursor AI',
              link: '/case-studies/success-companies/cursor-ai',
            },
            {
              text: 'Commonwealth Bank',
              link: '/case-studies/success-companies/commonwealth-bank',
            },
            {
              text: 'Bupa',
              link: '/case-studies/success-companies/bupa',
            },
          ],
        },
        {
          text: '组织转型案例',
          collapsible: true,
          children: [
            {
              text: 'Amazon',
              link: '/case-studies/organization-transformation/amazon',
            },
            {
              text: 'Moderna',
              link: '/case-studies/organization-transformation/moderna',
            },
            {
              text: 'Bayer',
              link: '/case-studies/organization-transformation/bayer',
            },
            {
              text: 'NVIDIA',
              link: '/case-studies/organization-transformation/nvidia',
            },
          ],
        },
        {
          text: '市场数据',
          link: '/case-studies/market-data',
        },
      ],

      // PPT演示模式
      '/slides/': [
        {
          text: '演示模式',
          children: [
            { text: '第1章：介绍', link: '/slides/1-introduction' },
            { text: '第2章：现状对比', link: '/slides/2-comparison' },
            { text: '第3章：核心定义', link: '/slides/3-definition' },
            { text: '第4章：实践演示', link: '/slides/4-practice' },
            { text: '第5章：转化路程', link: '/slides/5-transition' },
            { text: '第6章：展望', link: '/slides/6-outlook' },
            { text: '案例库', link: '/slides/cases' },
          ],
        },
      ],

      // 首页
      // '/': [],
      */
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
