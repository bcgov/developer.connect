<script setup lang="ts">
const localePath = useLocalePath()
const {
  href,
  target = '_self',
  download
} = defineProps<{
  href: string
  target?: string
  download?: string
}>()

const to = computed(() => {
  if (target === '_blank' || download !== undefined) {
    return href
  } else {
    return localePath(href)
  }
})
</script>

<template>
  <UButton
    :to
    :target
    :download
    variant="link"
    class="-m-2 gap-x-1.5 px-2.5 py-1.5 text-base underline underline-offset-4"
  >
    <span class="flex items-center gap-1">
      <slot />
      <UIcon v-if="download" name="i-mdi-tray-arrow-down" />
      <UIcon v-else-if="target === '_blank'" name="i-mdi-open-in-new" />
    </span>
  </UButton>
</template>
