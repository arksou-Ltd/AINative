<template>
  <a
    v-if="showButton"
    :href="pptLink"
    class="toggle-presentation-button"
    :title="'演示模式'"
    :aria-label="'演示模式'"
  >
    <PresentationChartBarIcon class="icon" aria-hidden="true" />
  </a>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PresentationChartBarIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const showButton = ref(false)

const pptLink = computed(() => {
  const path = route.path
  // 根据当前路径返回对应的演示模式链接
  if (path.includes('/1-introduction/')) return '/AINative/slides/1-introduction.html'
  if (path.includes('/2-comparison/')) return '/AINative/slides/2-comparison.html'
  if (path.includes('/3-core-definition/')) return '/AINative/slides/3-definition.html'
  if (path.includes('/4-practice-demo/')) return '/AINative/slides/4-practice.html'
  if (path.includes('/5-transition-practice/')) return '/AINative/slides/5-transition.html'
  if (path.includes('/6-outlook/')) return '/AINative/slides/6-outlook.html'
  if (path.includes('/case-studies/')) return '/AINative/slides/cases.html'
  return '#'
})

const checkRoute = () => {
  const path = route.path
  // 只在文档页面显示演示按钮
  if (
    path.includes('/1-introduction/') ||
    path.includes('/2-comparison/') ||
    path.includes('/3-core-definition/') ||
    path.includes('/4-practice-demo/') ||
    path.includes('/5-transition-practice/') ||
    path.includes('/6-outlook/') ||
    path.includes('/case-studies/')
  ) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}

watch(
  () => route.path,
  () => {
    checkRoute()
  }
)

onMounted(() => {
  checkRoute()
})
</script>

<style scoped>
/* 完全仿照 ToggleColorModeButton 的样式 */
.toggle-presentation-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--c-text);
  text-decoration: none;
  cursor: pointer;
}

.toggle-presentation-button:hover {
  color: var(--c-brand);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
