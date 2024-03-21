<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const { locale } = useI18n()
// const localePath = useLocalePath()
const routeWithoutLocale = useRouteWithoutLocale()

// fetch current page data
const { data: docPageData } = await useAsyncData(
  'doc-page-data',
  () => {
    return queryContent(routeWithoutLocale.value).where({ _locale: locale.value }).findOne()
  },
  {
    watch: [locale, routeWithoutLocale]
  }
)

// create page header based on current doc page directory
const pageHead = computed(() => {
  if (docPageData.value) {
    if (docPageData.value._dir === 'get-started') {
      return `Get Started - ${docPageData.value.title}`
    } else if (docPageData.value._dir === 'connect') {
      return `SBC Connect - ${docPageData.value.title}`
    } else {
      return `${docPageData.value._dir.toUpperCase()} - ${docPageData.value.title}`
    }
  } else {
    return ''
  }
})

useHead({
  title: () => pageHead.value
})

const tocLinks = computed(() => docPageData.value?.body?.toc?.links ?? [])
</script>

<template>
  <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
    <div class="relative col-start-1 col-end-4 hidden lg:block">
      <SbcSideNavigation
        :nav-items="createContentNav(navItems)"
        class="sticky top-0 max-h-[calc(100dvh-2rem)] min-h-dvh overflow-y-auto"
      />
    </div>
    <div class="w-full lg:col-start-4 lg:col-end-11 xl:-ml-8">
      <slot />
    </div>
    <div class="relative col-span-full col-start-11 hidden lg:block">
      <SbcTableOfContents
        class="sticky top-0"
        :toc-links="tocLinks"
        :current-dir="docPageData?._path"
      />
    </div>
  </main>
</template>
