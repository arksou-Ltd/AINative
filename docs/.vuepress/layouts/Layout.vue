<template>
  <div class="layout-wrapper" :class="{ 'doc-mode': isDocPage }">
    <!-- 自定义左侧导航（仅文档页面显示） -->
    <CustomNavigation v-if="isDocPage" />

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
import CustomNavigation from '../components/CustomNavigation.vue'
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

/* 为自定义导航调整主内容区域布局 */
.layout-wrapper.doc-mode .theme-default-content,
.layout-wrapper.doc-mode .page {
  padding-left: 280px !important;
  max-width: calc(100% - 280px - 240px) !important;
}

/* 隐藏 VuePress 默认 Sidebar */
.layout-wrapper.doc-mode .sidebar {
  display: none !important;
}

/* 移动端适配 */
@media (max-width: 719px) {
  .layout-wrapper.doc-mode .theme-default-content,
  .layout-wrapper.doc-mode .page {
    padding-left: 1.5rem !important;
    max-width: 100% !important;
  }
}
</style>