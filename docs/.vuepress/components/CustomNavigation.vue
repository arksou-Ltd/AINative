<template>
  <aside class="custom-navigation">
    <div class="nav-wrapper">
      <!-- 章节列表 -->
      <nav class="nav-sections">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="nav-section"
        >
          <!-- 章节标题 -->
          <div
            class="section-header"
            :class="{
              expanded: expandedSections[index],
              active: isSectionActive(section)
            }"
            @click="toggleSection(index)"
          >
            <div class="section-title">
              <component
                :is="getIconComponent(section.icon)"
                class="section-icon"
              />
              <span>{{ section.text }}</span>
            </div>
            <ChevronDownIcon
              class="collapse-icon"
              :class="{ rotated: expandedSections[index] }"
            />
          </div>

          <!-- 子页面列表（可折叠） -->
          <transition name="expand">
            <ul v-if="expandedSections[index]" class="section-children">
              <li
                v-for="(child, childIndex) in section.children"
                :key="childIndex"
              >
                <a
                  :href="child.link"
                  class="child-link"
                  :class="{ active: isActive(child.link) }"
                  @click.prevent="navigateTo(child.link)"
                >
                  {{ child.text }}
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navigationStructure } from '../config/navigation'
import {
  ChevronDownIcon,
  BookOpenIcon,
  ChartBarSquareIcon,
  CpuChipIcon,
  CommandLineIcon,
  MapIcon,
  SparklesIcon,
  BriefcaseIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const sections = ref(navigationStructure)

// 展开状态管理（默认全部展开）
const expandedSections = ref<Record<number, boolean>>(
  Object.fromEntries(sections.value.map((_, i) => [i, true]))
)

// 切换章节展开/折叠
const toggleSection = (index: number) => {
  expandedSections.value[index] = !expandedSections.value[index]
  // 持久化到 localStorage
  localStorage.setItem('ainative_nav_expanded', JSON.stringify(expandedSections.value))
}

// 判断链接是否激活
const isActive = (link: string | undefined) => {
  if (!link) return false
  const currentPath = route.path
  // 完全匹配或前缀匹配
  return currentPath === link || currentPath.startsWith(link.replace('.html', ''))
}

// 判断章节是否包含活跃页面
const isSectionActive = (section: any) => {
  return section.children?.some((child: any) => isActive(child.link))
}

// 动态获取图标组件
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    'BookOpenIcon': BookOpenIcon,
    'ChartBarSquareIcon': ChartBarSquareIcon,
    'CpuChipIcon': CpuChipIcon,
    'CommandLineIcon': CommandLineIcon,
    'MapIcon': MapIcon,
    'SparklesIcon': SparklesIcon,
    'BriefcaseIcon': BriefcaseIcon
  }
  return iconMap[iconName] || BookOpenIcon
}

// 导航到目标页面
const navigateTo = (link: string | undefined) => {
  if (!link) return
  router.push(link)
}

// 监听路由变化，自动展开当前章节
watch(() => route.path, (newPath) => {
  sections.value.forEach((section, index) => {
    if (section.children?.some(child => newPath.startsWith(child.link?.replace('.html', '') || ''))) {
      expandedSections.value[index] = true
    }
  })
})

// 从 localStorage 恢复展开状态
onMounted(() => {
  const saved = localStorage.getItem('ainative_nav_expanded')
  if (saved) {
    try {
      const savedState = JSON.parse(saved)
      expandedSections.value = savedState
    } catch (e) {
      console.warn('Failed to restore navigation state:', e)
    }
  }
})
</script>

<style scoped>
.custom-navigation {
  position: fixed;
  top: var(--navbar-height, 3.6rem);
  left: 0;
  width: 280px;
  height: calc(100vh - var(--navbar-height, 3.6rem));
  background-color: var(--c-bg-sidebar, #1a1a1a);
  border-right: 1px solid var(--c-border, rgba(255, 255, 255, 0.1));
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 20;
  padding: 24px 0;
}

/* 滚动条样式 */
.custom-navigation::-webkit-scrollbar {
  width: 6px;
}

.custom-navigation::-webkit-scrollbar-track {
  background: transparent;
}

.custom-navigation::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.custom-navigation::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 章节容器 */
.nav-section {
  margin-bottom: 8px;
}

/* 章节标题 */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 0 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.section-header:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.section-header.active {
  background-color: rgba(255, 255, 255, 0.06);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--c-text, #ffffff);
}

.section-icon {
  width: 16px;
  height: 16px;
  color: var(--c-text-light, rgba(255, 255, 255, 0.6));
  flex-shrink: 0;
}

.section-header.active .section-icon {
  color: var(--c-brand, #3b82f6);
}

.collapse-icon {
  width: 16px;
  height: 16px;
  color: var(--c-text-light, rgba(255, 255, 255, 0.6));
  transition: transform 0.2s ease;
}

.collapse-icon.rotated {
  transform: rotate(180deg);
}

/* 子页面列表 */
.section-children {
  list-style: none;
  padding: 4px 0 0 0;
  margin: 0;
  overflow: hidden;
}

.child-link {
  display: block;
  padding: 6px 16px 6px 42px;
  margin: 0 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-light, rgba(255, 255, 255, 0.6));
  text-decoration: none;
  transition: all 0.15s ease;
  position: relative;
}

.child-link:hover {
  background-color: rgba(255, 255, 255, 0.04);
  color: var(--c-text, #ffffff);
}

.child-link.active {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--c-brand, #3b82f6);
  font-weight: 600;
}

/* 活跃项左侧指示器 */
.child-link.active::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 16px;
  background-color: var(--c-brand, #3b82f6);
  border-radius: 1px;
}

/* 折叠动画 */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* 移动端适配 */
@media (max-width: 719px) {
  .custom-navigation {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .custom-navigation.mobile-open {
    transform: translateX(0);
  }
}
</style>
