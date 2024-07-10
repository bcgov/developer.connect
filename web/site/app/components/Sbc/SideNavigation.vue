<script setup lang="ts">
defineProps<{
  navItems: AccordianNavItem[] | undefined
}>()
</script>
<template>
  <aside class="mx-2 min-w-48 max-w-min py-4">
    <SbcAccordianNavigation :nav-items="navItems" />
  </aside>
</template>
