<script setup lang="ts">
import { BcrosSearch } from 'bcros-search-test-publish'

interface Props {
  link?: string
  showCodepen?: boolean
  showEvent?: boolean
}

withDefaults(defineProps<Props>(), {
  link: '',
  showCodepen: false,
  showEvent: false
})

const selected = ref('')

const tabs = [
  {
    key: 'preview',
    label: 'Preview'
  },
  {
    key: 'html',
    label: 'HTML'
  },
  {
    key: 'vue',
    label: 'Vue'
  },
  {
    key: 'react',
    label: 'React'
  }
]

const shownTab = ref('preview')

function handleSelect(event: CustomEvent) {
  selected.value = event.detail
}
</script>

<template>
  <div class="not-prose my-6">
    <UCard
      :ui="{
        root: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm',
        body: 'p-4 sm:p-6'
      }"
    >
      <div class="mb-4 border-b border-gray-200 dark:border-gray-800">
        <div class="flex gap-2">
          <UButton
            v-for="tab in tabs"
            :key="tab.key"
            :label="tab.label"
            :variant="shownTab === tab.key ? 'solid' : 'ghost'"
            :color="shownTab === tab.key ? 'primary' : 'neutral'"
            size="sm"
            class="rounded-b-none"
            @click="shownTab = tab.key"
          />
        </div>
      </div>

      <div class="min-w-full">
        <div v-if="shownTab === 'preview'" class="w-full">
          <bcros-search v-if="!showEvent" url="/api/reg-search" v-bind="$attrs" />
          <bcros-search v-if="showEvent" url="/api/reg-search" v-bind="$attrs" @select="handleSelect" />
          <span v-if="showEvent" class="mt-2 block text-sm">Selected Business: {{ selected }}</span>
        </div>
        <div v-if="shownTab === 'html'" class="prose min-w-full dark:prose-invert">
          <slot name="html" />
        </div>
        <div v-if="shownTab === 'vue'" class="prose min-w-full dark:prose-invert">
          <slot name="vue" />
        </div>
        <div v-if="shownTab === 'react'" class="prose min-w-full dark:prose-invert">
          <slot name="react" />
        </div>
      </div>
    </UCard>
  </div>
</template>
