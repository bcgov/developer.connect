<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navKey')
console.log(navigation)
</script>
<template>
  <div class="min-w-fit flex-1 overflow-y-auto border-r border-bcGovGray-500 bg-bcGovColor-gray1 px-2 py-4 dark:bg-bcGovGray-900">
    <aside>
      <nav>
        <SbcAccordianNavigation :nav-items="createContentNav(navigation)" />
      </nav>
    </aside>
  </div>
</template>
