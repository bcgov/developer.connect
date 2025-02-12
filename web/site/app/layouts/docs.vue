<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const mainHeaderHeight = inject<Ref<number>>('mainHeaderHeight')
const footerHeight = inject<Ref<number>>('footerHeight')
const breadcrumbHeight = inject<Ref<number>>('breadcrumbHeight')
const { prevPage, nextPage } = useSurroundPages()
const { createPageHead } = useDocPageData()
const contentWrapper = shallowRef<HTMLDivElement | null>(null)

useHead({
  title: () => createPageHead()
})

// styles for nav + toc sticky, for some reason header + footer height are consistently 18px short
const stickyStyles = computed(() => ({
  top: `${mainHeaderHeight!.value + breadcrumbHeight!.value + 18}px`
  // maxHeight: `calc(100vh - (${mainHeaderHeight!.value + footerHeight!.value + 36}px))`,
  // minHeight: `calc(100vh - ${mainHeaderHeight!.value + 18}px)`
}))
</script>
<template>
  <main class="relative mx-auto flex w-full grow gap-4 bg-white px-2 xl:gap-8 xl:px-8">
    <!-- side navigation -->
    <div class="m-auto flex w-full max-w-[1360px] gap-4 py-12">
      <div
        class="sticky hidden overflow-y-auto overflow-x-hidden lg:block h-min"
        :style="stickyStyles"
      >
        <SbcDocsSideNavigation :nav-items="createContentNav(navItems)" />
      </div>
      <!-- main content -->
      <div class="flex grow flex-col gap-8">
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
    <!-- <div
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
    </div> -->
    </div>
  </main>
</template>
