<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const mainHeaderHeight = inject<Ref<number>>('mainHeaderHeight')
const footerHeight = inject<Ref<number>>('footerHeight')
const { prevPage, nextPage } = useSurroundPages()
const { currentDir, tocLinks, createPageHead } = useDocPageData()
const contentWrapper = shallowRef<HTMLDivElement | null>(null)
const { activeTocId } = useHeadingObserver(contentWrapper.value)

useHead({
  title: () => createPageHead()
})

// styles for nav + toc sticky, for some reason header + footer height are consistently 18px short
const stickyStyles = computed(() => ({
  top: `${mainHeaderHeight!.value + 18}px`,
  maxHeight: `calc(100vh - (${mainHeaderHeight!.value + footerHeight!.value + 36}px))`,
  minHeight: `calc(100vh - ${mainHeaderHeight!.value + 18}px)`
}))
</script>
<template>
  <main class="relative mx-auto flex w-full max-w-[1360px] grow gap-4 px-2 xl:gap-8 xl:px-0">
    <!-- side navigation -->
    <div
      class="sticky hidden overflow-y-auto overflow-x-hidden py-4 lg:block"
      :style="stickyStyles"
    >
      <SbcDocsSideNavigation :nav-items="createContentNav(navItems)" />
    </div>
    <!-- main content -->
    <div class="flex grow flex-col gap-8 py-8">
      <div ref="contentWrapper">
        <slot />
      </div>
      <UDivider />
      <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <SbcDocsNextPrevButton
          :page="prevPage"
          direction="prev"
        />
        <SbcDocsNextPrevButton
          :page="nextPage"
          direction="next"
        />
      </div>
    </div>
    <!-- table of contents -->
    <div
      class="sticky hidden overflow-y-auto py-8 lg:block"
      :style="stickyStyles"
    >
      <SbcDocsTableOfContents
        v-show="tocLinks.length"
        :hide-label="false"
        class="max-w-48"
        :toc-links="tocLinks"
        :current-dir="currentDir"
        :active-toc-id="activeTocId"
      />
    </div>
  </main>
</template>
