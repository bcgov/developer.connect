<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <h2
    :id="id"
    class="text-2xl font-bold text-[#212529] dark:text-white underline underline-offset-4 scroll-mt-24"
  >
    <a
      v-if="id"
      :href="`#${id}`"
      class="text-inherit hover:underline"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
