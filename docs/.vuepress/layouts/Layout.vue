<template>
  <div class="layout-wrapper" :class="{ 'doc-mode': isDocPage }">
    <ParentLayout>
      <template #page-content-top>
        <Breadcrumb v-if="isDocPage" />
      </template>
    </ParentLayout>
    
    <RightTOC v-if="isDocPage" />
  </div>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import RightTOC from '../components/RightTOC.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { usePageData } from '@vuepress/client'
import { computed } from 'vue'

const page = usePageData()
const isDocPage = computed(() => {
  return !page.value.frontmatter.home && !page.value.frontmatter.layout
})
</script>

<style>
/* Layout level overrides if necessary */
.layout-wrapper.doc-mode .theme-container {
  /* Ensure background propagates */
  background-color: var(--linear-bg-body);
}
</style>