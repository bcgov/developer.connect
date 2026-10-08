<script setup lang="ts">
const props = defineProps<{
  href: string
  download: string
}>()

function downloadFile() {
  const a = document.createElement('a')
  a.href = props.href
  a.download = props.download
  a.target = '_blank'
  a.click()
  a.remove()
}
</script>

<template>
  <UButton
    :label="$t('btn.downloadSpec', 'Download the Specification')"
    color="primary"
    size="lg"
    class="h-11 w-fit px-6 tracking-wide no-underline cursor-pointer"
    icon="i-mdi-download"
    @click="downloadFile"
  />
</template>
