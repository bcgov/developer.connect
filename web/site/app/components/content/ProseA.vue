<script setup lang="ts">
const localePath = useLocalePath()
const props = withDefaults(
  defineProps<{
    href: string
    target?: string
    download?: string
  }>(),
  {
    target: '_self',
    download: undefined
  }
)

const isAnchor = computed(() => props.href?.startsWith('#'))
const isExternal = computed(() => props.target === '_blank' || props.href?.startsWith('http'))

function resolvePath() {
  if (isExternal.value || props.download !== undefined || isAnchor.value) {
    return props.href
  }
  return localePath(props.href)
}
</script>

<template>
  <NuxtLink
    :to="resolvePath()"
    :target="isExternal ? '_blank' : target"
    :download="download"
    :class="[
      isAnchor
        ? 'text-neutral-highlighted dark:text-white underline underline-offset-4 font-bold no-underline-hover'
        : 'text-[#1669BB] dark:text-blue-400 underline underline-offset-2 font-medium hover:text-[#002753] dark:hover:text-blue-300 inline-flex items-center gap-1'
    ]"
  >
    <slot />
    <UIcon
      v-if="download"
      name="i-mdi-tray-arrow-down"
      class="inline size-4 shrink-0"
    />
    <UIcon
      v-else-if="isExternal"
      name="i-mdi-open-in-new"
      class="inline size-4 shrink-0"
    />
  </NuxtLink>
</template>
