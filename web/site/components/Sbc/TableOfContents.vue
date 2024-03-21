<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'
defineProps<{
  tocLinks: TocLink[] | [],
  currentDir?: string
}>()

const route = useRoute()
const localePath = useLocalePath()

// smooth scroll to element and update router history
function onClick (id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    const newPath = `${route.path}#${id}`
    history.pushState(history.state, '', newPath)
  }
}

const itemRefs = ref([])

</script>
<template>
  <aside class="">
    <nav class="pt-6 text-sm text-bcGovColor-midGray" aria-label="table of contents">
      <span class="font-semibold text-bcGovColor-darkGray dark:text-white">Table of Contents</span>
      <ul class="mt-2 flex flex-col space-y-1">
        <li v-for="{ id, text, children } in tocLinks" :key="id" ref="itemRefs">
          <a
            :href="localePath(currentDir + '#' + id)"
            class="cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            @click.prevent="onClick(id)"
          >
            {{ text }}
          </a>
          <ul v-if="children" class="my-1 ml-2 flex flex-col">
            <li v-for="{ id: childId, text: childText } in children" :key="childId">
              <a
                :href="localePath(currentDir + '#' + childId)"
                class="cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                @click.prevent="onClick(childId)"
              >
                {{ childText }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
