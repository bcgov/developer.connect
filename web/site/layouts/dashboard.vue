<script setup lang="ts">
const navItems = inject<Ref<AccordianNavItem[]>>('dashNavItems')
</script>

<template>
  <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
    <SbcSideNavigation :nav-items="navItems" />
    <div class="w-full lg:col-span-full lg:col-start-4 xl:-ml-10">
      <slot />
    </div>
  </main>
</template>
