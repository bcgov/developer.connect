<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>
<template>
  <UButton
    label="Download the specification"
    :to="href"
    size="xl"
    class="tracking-wide no-underline"
  />
</template>
<i18n lang="json">
  {
    "en-CA": {
      "getStarted": "Download the specification"
    },
    "fr-CA": {
      "getStarted": "Téléchargez la spécification"
    }
  }
</i18n>
