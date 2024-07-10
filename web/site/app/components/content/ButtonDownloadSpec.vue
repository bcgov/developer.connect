<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>
<template>
  <UButton
    :label="$t('btn.downloadSpec')"
    :to="href"
    size="xl"
    class="tracking-wide no-underline"
  />
</template>
