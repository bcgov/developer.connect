<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>
<template>
  <UButton
    :label="$t('btn.downloadSpec')"
    :to="href"
    size="lg"
    class="h-11 w-64 tracking-wide no-underline"
    icon="i-mdi-download"
  />
</template>
