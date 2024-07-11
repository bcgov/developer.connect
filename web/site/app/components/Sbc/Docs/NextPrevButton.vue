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
    :aria-label="`${handleContentDirectoryLabel(page?._path?.split('/')[2] ?? '')}, ${page?.title}`"
    :to="localePath(page?._path || '/')"
    variant="outline"
    color="gray"
    class="w-full sm:w-auto"
  >
    <UIcon v-if="direction === 'prev'" name="i-mdi-arrow-left-circle" class="size-8" />
    <div :class="[ direction === 'next' ? 'ml-auto' : '', 'flex flex-col']">
      <span class="text-lg font-medium text-bcGovColor-darkGray dark:text-white">{{ handleContentDirectoryLabel(page?._path?.split('/')[2] ?? '') }}</span>
      <span class="text-base text-bcGovColor-midGray dark:text-gray-300">{{ page?.title }}</span>
    </div>
    <UIcon v-if="direction === 'next'" name="i-mdi-arrow-right-circle" class="size-8" />
  </UButton>
</template>
