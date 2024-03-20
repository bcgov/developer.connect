<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
</script>

<template>
  <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
    <SbcSideNavigation :nav-items="createContentNav(navItems)" />
    <div class="w-full lg:col-start-4 lg:col-end-11 xl:-ml-8">
      <slot />
    </div>
    <div class="col-span-full col-start-11 bg-white">
      <SbcTableOfContents />
    </div>
  </main>
</template>
