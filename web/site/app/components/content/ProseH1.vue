<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <h1
    :id="id"
    class="text-3xl font-bold text-[#212529] dark:text-white scroll-mt-24"
  >
    <slot />
  </h1>
</template>
