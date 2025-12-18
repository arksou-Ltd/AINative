/**
 * 导航数据结构定义
 * 用于自定义左侧导航栏
 */

export interface NavItem {
  text: string          // 显示文本
  icon: string          // 图标名称
  collapsible: boolean  // 是否可折叠
  link?: string         // 链接地址（章节标题可选）
  children?: NavItem[]  // 子页面列表
}

export const navigationStructure: NavItem[] = [
  {
    text: '第一章：企业持续成功',
    icon: 'BookOpenIcon',
    collapsible: true,
    children: [
      {
        text: '企业持续成功',
        icon: '',
        collapsible: false,
        link: '/1-introduction/'
      },
      {
        text: '企业持续成功的本质',
        icon: '',
        collapsible: false,
        link: '/1-introduction/enterprise-success.html'
      },
      {
        text: '组织能力是壁垒',
        icon: '',
        collapsible: false,
        link: '/1-introduction/organizational-capability.html'
      }
    ]
  },
  {
    text: '第二章：AI Native',
    icon: 'CpuChipIcon',
    collapsible: true,
    children: [
      {
        text: 'AI Native',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/'
      },
      {
        text: 'AI Native 组织',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/ai-native-organization.html'
      },
      {
        text: '与传统组织对比',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/organization-comparison.html'
      },
      {
        text: '实践演示',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/practice-demo.html'
      }
    ]
  },
  {
    text: '第三章：转化路程',
    icon: 'MapIcon',
    collapsible: true,
    children: [
      {
        text: '转化路程',
        icon: '',
        collapsible: false,
        link: '/3-transition-practice/'
      },
      {
        text: '为什么是现在？',
        icon: '',
        collapsible: false,
        link: '/3-transition-practice/why-now.html'
      },
      {
        text: '过渡性架构思考',
        icon: '',
        collapsible: false,
        link: '/3-transition-practice/3-1-organization-architecture/'
      },
      {
        text: '常用工具使用',
        icon: '',
        collapsible: false,
        link: '/3-transition-practice/tools-guide.html'
      },
      {
        text: '实践演示',
        icon: '',
        collapsible: false,
        link: '/3-transition-practice/practice-implementation.html'
      }
    ]
  },
  {
    text: '第四章：展望',
    icon: 'SparklesIcon',
    collapsible: true,
    children: [
      {
        text: '展望',
        icon: '',
        collapsible: false,
        link: '/4-outlook/'
      }
    ]
  },
  {
    text: '第五章：案例研究',
    icon: 'BriefcaseIcon',
    collapsible: true,
    children: [
      {
        text: '案例概览',
        icon: '',
        collapsible: false,
        link: '/5-case-studies/'
      }
    ]
  }
]
