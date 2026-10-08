<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

defineProps<{
  page: Pick<ParsedContent, '_path' | 'title'> | undefined
  direction: 'next' | 'prev'
}>()

const localePath = useLocalePath()
</script>

<template>
  <UButton
    v-if="page && page._path && page._path !== 'Not Found'"
    :to="localePath(page._path)"
    :variant="direction === 'prev' ? 'outline' : 'solid'"
    color="primary"
    class="flex h-11 items-center px-4 font-medium transition-all"
  >
    <UIcon
      v-if="direction === 'prev'"
      name="i-mdi-chevron-left"
      class="mr-2 size-5 shrink-0"
    />
    <span>{{ direction === 'prev' ? $t('btn.prevpage', 'Previous Topic') : $t('btn.nextpage', 'Next Topic') }}</span>
    <UIcon
      v-if="direction === 'next'"
      name="i-mdi-chevron-right"
      class="ml-2 size-5 shrink-0"
    />
  </UButton>
</template>
