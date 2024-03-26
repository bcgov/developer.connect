<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const localePath = useLocalePath()
const { prevPage, nextPage } = useSurroundPages()
const { currentDir, tocLinks, createPageHead } = useDocPageData()
const { activeTocId } = useHeadingObserver()

useHead({
  title: () => createPageHead()
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
    <div id="nuxt-content-wrapper" class="w-full lg:col-start-4 lg:col-end-11 xl:-ml-8">
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
        v-show="tocLinks.length"
        :hide-label="false"
        class="sticky top-0 mt-6"
        :toc-links="tocLinks"
        :current-dir="currentDir"
        :active-toc-id="activeTocId"
      />
    </div>
  </main>
</template>
