<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
// filter locale from route
const routeWithoutLocale = route.path.replace(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//, '/')

// fetch current page data
const { data } = await useAsyncData(
  'toc-data',
  () => {
    return queryContent(routeWithoutLocale).where({ _locale: locale.value }).findOne()
  },
  {
    watch: [locale, route]
  }
)

const tocLinks = computed(() => data.value?.body?.toc?.links ?? [])

function onClick (id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    const newPath = `${route.path}#${id}`
    history.pushState(null, '', newPath)
  }
}

</script>
<template>
  <aside class="">
    <nav class="mt-4">
      <ul class="ml-0 flex flex-col pl-4">
        <li v-for="{ id, text, children } in tocLinks" :key="id">
          <a
            :href="localePath(data?._path + '#' + id)"
            class="mb-2 ml-0 cursor-pointer list-none text-sm last:mb-0"
            @click.prevent="onClick(id)"
          >
            {{ text }}
          </a>
          <ul v-if="children" class="my-2 ml-3 flex flex-col">
            <li v-for="{ id: childId, text: childText } in children" :key="childId">
              <a
                :href="localePath(data?._path + '#' + childId)"
                class="mb-2 ml-0 cursor-pointer list-none text-xs last:mb-0"
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
