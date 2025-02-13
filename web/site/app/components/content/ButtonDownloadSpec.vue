<script setup lang="ts">
const props = defineProps<{
  href: string
  download: string
}>()

const downloadFile = () => {
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
    :label="$t('btn.downloadSpec')"
    size="lg"
    class="h-11 w-64 tracking-wide no-underline"
    icon="i-mdi-download"
    @click="downloadFile"
  />
</template>
