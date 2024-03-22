<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const { locale } = useI18n()
const localePath = useLocalePath()
const routeWithoutLocale = useRouteWithoutLocale()
const { prevPage, nextPage } = useSurroundPages()

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

// return current page data table of contents
const tocLinks = computed(() => docPageData.value?.body?.toc?.links ?? [])

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
    <UDivider class="px-2 lg:col-start-4 lg:col-end-11 xl:-ml-8" />
    <div class="flex w-full flex-col items-center justify-between gap-4 px-2 py-8 sm:flex-row lg:col-start-4 lg:col-end-11 xl:-ml-8">
      <UButton
        :label="prevPage?.title"
        :to="localePath(prevPage?._path || '/')"
        variant="outline"
        color="gray"
        class="w-full sm:w-auto"
      >
        <UIcon name="i-mdi-arrow-left-circle" class="size-8" />
        <div class="flex flex-col">
          <span class="text-lg font-medium text-bcGovColor-darkGray dark:text-white">{{ handleContentDirectoryLabel(prevPage?._path?.split('/')[2] ?? '') }}</span>
          <span class="text-base text-bcGovColor-midGray dark:text-gray-300">{{ prevPage?.title }}</span>
        </div>
      </UButton>
      <UButton
        :label="nextPage?.title"
        :to="localePath(nextPage?._path || '/')"
        variant="outline"
        color="gray"
        class="w-full sm:w-auto"
      >
        <div class="ml-auto flex flex-col">
          <span class="text-lg font-medium text-bcGovColor-darkGray dark:text-white">{{ handleContentDirectoryLabel(nextPage?._path?.split('/')[2] ?? '') }}</span>
          <span class="text-base text-bcGovColor-midGray dark:text-gray-300">{{ nextPage?.title }}</span>
        </div>
        <UIcon name="i-mdi-arrow-right-circle" class="size-8" />
      </UButton>
    </div>
    <div class="relative col-span-full col-start-11 row-start-1 hidden lg:block">
      <SbcTableOfContents
        v-if="tocLinks.length"
        class="sticky top-0"
        :toc-links="tocLinks"
        :current-dir="docPageData?._path"
      />
    </div>
  </main>
</template>
