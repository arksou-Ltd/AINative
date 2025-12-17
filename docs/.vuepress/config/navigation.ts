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
    text: '第一章：企业的持续成功',
    icon: 'BookOpenIcon',
    collapsible: true,
    children: [
      {
        text: '企业的持续成功',
        icon: '',
        collapsible: false,
        link: '/1-introduction/'
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
    icon: 'ChartBarSquareIcon',
    collapsible: true,
    children: [
      {
        text: 'AI Native 组织',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/ai-native-brief.html'
      },
      {
        text: 'AI Native 组织与传统组织的对比',
        icon: '',
        collapsible: false,
        link: '/2-ai-native/organization-comparison.html'
      }
    ]
  },
  {
    text: '第三章：核心定义',
    icon: 'CpuChipIcon',
    collapsible: true,
    children: [
      {
        text: '核心定义概述',
        icon: '',
        collapsible: false,
        link: '/3-core-definition/'
      },
      {
        text: '数字劳动力',
        icon: '',
        collapsible: false,
        link: '/3-core-definition/digital-workforce.html'
      }
    ]
  },
  {
    text: '第四章：实践演示',
    icon: 'CommandLineIcon',
    collapsible: true,
    children: [
      {
        text: '实践演示',
        icon: '',
        collapsible: false,
        link: '/4-practice-demo/'
      }
    ]
  },
  {
    text: '第五章：转化路程',
    icon: 'MapIcon',
    collapsible: true,
    children: [
      {
        text: '转化路程概述',
        icon: '',
        collapsible: false,
        link: '/5-transition-practice/'
      },
      {
        text: '组织架构转型',
        icon: '',
        collapsible: false,
        link: '/5-transition-practice/5-1-organization-architecture/'
      },
      {
        text: '核心实践方法论',
        icon: '',
        collapsible: false,
        link: '/5-transition-practice/5-2-core-practices/'
      }
    ]
  },
  {
    text: '第六章：展望',
    icon: 'SparklesIcon',
    collapsible: true,
    children: [
      {
        text: '展望',
        icon: '',
        collapsible: false,
        link: '/6-outlook/'
      }
    ]
  },
  {
    text: '案例研究',
    icon: 'BriefcaseIcon',
    collapsible: true,
    children: [
      {
        text: '案例概览',
        icon: '',
        collapsible: false,
        link: '/case-studies/'
      }
    ]
  }
]
