<template>
  <nav class="breadcrumb" v-if="!isHome">
    <a href="/AINative/" class="crumb-link">Home</a>
    <span class="separator">/</span>
    <span class="current">{{ page.title }}</span>
  </nav>
</template>

<script setup>
import { usePageData } from '@vuepress/client'
import { computed } from 'vue'

const page = usePageData()
const isHome = computed(() => page.value.frontmatter.home)
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--linear-text-secondary);
  margin-bottom: 1rem;
  font-family: var(--linear-font-family);
}

.crumb-link {
  color: var(--linear-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.crumb-link:hover {
  color: var(--linear-text-primary);
}

.separator {
  margin: 0 8px;
  opacity: 0.5;
}

.current {
  color: var(--linear-text-primary);
  font-weight: 500;
}
</style>
