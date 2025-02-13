<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
const mainHeaderHeight = inject<Ref<number>>('mainHeaderHeight')
// const footerHeight = inject<Ref<number>>('footerHeight')
const breadcrumbHeight = inject<Ref<number>>('breadcrumbHeight')
const { prevPage, nextPage } = useSurroundPages()
const { createPageHead } = useDocPageData()
const contentWrapper = shallowRef<HTMLDivElement | null>(null)

useHead({
  title: () => createPageHead()
})

// styles for nav + toc sticky, for some reason header + footer height are consistently 18px short
const stickyStyles = computed(() => ({
  top: `${mainHeaderHeight!.value + breadcrumbHeight!.value + 18}px` // TODO: fix scrollable area
  // maxHeight: `calc(100dvh - (${mainHeaderHeight!.value + breadcrumbHeight!.value + footerHeight!.value + 36}px))`,
}))
</script>
<template>
  <main class="relative mx-auto flex w-full grow gap-4 bg-white px-2 xl:gap-8 xl:px-8">
    <!-- side navigation -->
    <div class="m-auto flex w-full max-w-[1360px] gap-4 py-12">
      <div
        class="sticky hidden h-min overflow-x-hidden lg:block"
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
    </div>
  </main>
</template>
