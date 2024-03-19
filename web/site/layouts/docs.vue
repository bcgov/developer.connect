<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navItems = inject<Ref<NavItem[]>>('docNavItems')
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
      <SbcSideNavigation :nav-items="createContentNav(navItems)" />
      <div class="w-full lg:col-span-full lg:col-start-4 xl:-ml-10">
        <slot />
      </div>
    </main>
    <SbcFooter />
  </div>
</template>
