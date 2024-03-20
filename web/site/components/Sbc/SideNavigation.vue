<script setup lang="ts">
defineProps<{
  navItems: AccordianNavItem[] | undefined
}>()
</script>
<template>
  <aside class="absolute hidden h-full max-w-min flex-1 overflow-y-auto border-r border-bcGovGray-500 bg-bcGovColor-gray1 px-2 py-4 lg:static lg:col-start-1 lg:col-end-4 lg:block dark:bg-bcGovGray-900">
    <nav>
      <SbcAccordianNavigation :nav-items="navItems" />
    </nav>
  </aside>
</template>
