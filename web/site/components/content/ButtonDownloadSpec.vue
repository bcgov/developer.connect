<script setup lang="ts">
  defineProps<{
    href: string
  }>()
</script>
<template>
  <a
    class="bg-BCgovBlue5 text-white text-lg font-semibold no-underline p-4 mt-4 rounded"
    :href="href"
  >
    Download the specification
  </a>
</template>
