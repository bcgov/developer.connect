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
    :variant="direction === 'prev' ? 'outline' : 'solid'"
    class="flex h-11 w-48 items-center text-wrap align-middle"
  >
    <UIcon v-if="direction === 'prev'" name="i-mdi-chevron-left" class="size-6" />
    <div v-if="direction === 'prev'" class="flex flex-col">
      <span class="text-lg font-medium text-bcGovColor-activeBlue dark:text-white"> {{ $t('btn.prevpage') }}</span>
    </div>
    <div v-if="direction === 'next'" :class="[ 'ml-9', 'flex', 'flex-row' ]">
      <span class="text-lg font-medium text-bcGovColor-white dark:text-white ">{{ $t('btn.nextpage') }}</span>
    </div>
    <UIcon v-if="direction === 'next'" name="i-mdi-chevron-right" class="size-6" />
  </UButton>
</template>
