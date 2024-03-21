<script setup lang="ts">
const navItems = inject<Ref<AccordianNavItem[]>>('dashNavItems')
</script>

<template>
  <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
    <div class="relative col-start-1 col-end-3 hidden lg:block">
      <SbcSideNavigation
        :nav-items="navItems"
        class="sticky top-0"
      />
    </div>
    <div class="w-full lg:col-span-full lg:col-start-3">
      <slot />
    </div>
  </main>
</template>
