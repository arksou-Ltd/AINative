import { defineClientConfig } from '@vuepress/client'
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";
import StoryContext from './components/StoryContext.vue'
import PresentationEntry from './components/PresentationEntry.vue'
import Slide from './layouts/Slide.vue'
import Layout from './layouts/Layout.vue'

defineRevealJsConfig({
  // Minimal config
});

export default defineClientConfig({
  enhance({ app }) {
    app.component('StoryContext', StoryContext)
    app.component('PresentationEntry', PresentationEntry)
  },
  layouts: {
    Slide,
    Layout,
  },
  // Removed PresentationEntry from rootComponents as it is now integrated in RightTOC/Layout
  rootComponents: [], 
})