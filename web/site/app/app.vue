<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const i18nHead = useLocaleHead()

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs?.lang || 'en-CA',
    dir: () => (i18nHead.value.htmlAttrs?.dir as 'auto' | 'ltr' | 'rtl' | undefined) || 'ltr'
  }
})

// Fetch content navigation items using composable from nuxt-content
const { data: docNavItems } = await useAsyncData(
  'content-navigation',
  () => fetchContentNavigation(
    queryContent('products')
      .where({ _locale: locale.value, _extension: { $eq: 'md' } })
      .sort({ _dir: 1 })
  ),
  {
    watch: [locale]
  }
)

// Provide nav items to use in docs layout
provide('docNavItems', docNavItems)
</script>

<template>
  <UApp :toaster="{ position: 'bottom-center' }">
    <div class="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style>
  .prose-bcGov {
    --tw-prose-body: #495057;
    --tw-prose-headings: #212529;
    --tw-prose-counters: #212529;
    --tw-prose-bullets: #212529;
    --tw-prose-code: #212529;
    --tw-prose-pre-code: #212529;
    --tw-prose-pre-bg: #FFFFFF;
    --tw-prose-hr: #ced4da;
    color: #495057;
  }
  .light-mode {
    --scalar-color-1: #212529 !important;
    --scalar-color-2: #212529 !important;
    --scalar-color-3: #212529 !important;
    --scalar-color-accent: #1669bb !important;
    --scalar-background-1: #f1f3f5 !important;
    --scalar-background-2: #e9ecef !important;
    --scalar-background-3: #dee2e6 !important;
    --scalar-background-accent: #5369d20f !important;
    --scalar-border-color: rgba(0, 0, 0, 0.08) !important;
  }
  .dark-mode {
    --scalar-color-1: rgba(255, 255, 255, 0.81) !important;
    --scalar-color-2: rgba(255, 255, 255, 0.443) !important;
    --scalar-color-3: rgba(255, 255, 255, 0.282) !important;
    --scalar-color-accent: #e0e7ed !important;
    --scalar-background-1: #202020 !important;
    --scalar-background-2: #272727 !important;
    --scalar-background-3: #333333 !important;
    --scalar-background-accent: #8ab4f81f !important;
    --scalar-border-color: rgb(209 213 219 / 0.5) !important;
  }
</style>
