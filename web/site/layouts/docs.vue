<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
const navigation = inject<Ref<NavItem[]>>('navKey')
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain :accordian-items="createContentNav(navigation)" />
    <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
      <aside class="absolute hidden h-full min-w-fit flex-1 overflow-y-auto border-r border-bcGovGray-500 bg-bcGovColor-gray1 px-2 py-4 lg:static lg:col-start-1 lg:col-end-3 lg:block dark:bg-bcGovGray-900">
        <nav>
          <SbcAccordianNavigation :nav-items="createContentNav(navigation)" />
        </nav>
      </aside>
      <div class="w-full lg:col-span-full lg:col-start-4 xl:-ml-10">
        <slot />
      </div>
    </main>
    <SbcFooter />
  </div>
</template>
