<template>
  <div v-if="showControls" class="slide-controls">
    <a :href="docLink" class="back-btn">
      <span class="icon">⬅</span> 返回文档
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showControls = ref(false)

const docLink = computed(() => {
  const path = route.path
  if (path.includes('1-introduction')) return '/AINative/1-introduction/'
  if (path.includes('2-comparison')) return '/AINative/2-comparison/'
  if (path.includes('3-definition')) return '/AINative/3-core-definition/'
  if (path.includes('4-practice')) return '/AINative/4-practice-demo/'
  if (path.includes('5-transition')) return '/AINative/5-transition-practice/'
  if (path.includes('6-outlook')) return '/AINative/6-outlook/'
  if (path.includes('cases')) return '/AINative/case-studies/'
  return '/AINative/'
})

const checkRoute = () => {
  if (route.path.includes('/slides/')) {
    showControls.value = true
  } else {
    showControls.value = false
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
.slide-controls {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 20;
}

:deep(.reveal-viewport) .slide-controls {
    z-index: 100;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: var(--c-text);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.back-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: var(--c-brand);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(56, 189, 248, 0.2);
  text-decoration: none;
}

.icon {
  font-size: 1.1rem;
}
</style>