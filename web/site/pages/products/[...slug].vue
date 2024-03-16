<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

// filter locale from route
const routeWithoutLocale = route.path.replace(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//, '/')

// fetch current page data
const { data } = await useAsyncData(
  'page-head',
  () => {
    return queryContent(routeWithoutLocale).where({ _locale: locale.value }).findOne()
  },
  {
    watch: [locale, route]
  }
)

// console.log(data.value)

// build page header string based off "'directory' - 'page title'"
const createPageHead = computed(() => {
  const page = data.value
  if (page) {
    if (page._dir === 'get-started') {
      return `Get Started - ${page.title}`
    } else if (page._dir === 'connect') {
      return `SBC Connect - ${page.title}`
    } else {
      return `${page._dir.toUpperCase()} - ${page.title}`
    }
  } else {
    return ''
  }
})

useHead({
  title: createPageHead.value
})
// console.log(data.value.body?.toc?.links)

// const [prev, next] = await queryContent()
//   .only(['_path', 'title'])
//   .where({_locale: locale.value })
//   .findSurround(routeWithoutLocale)

// console.log(prev, next)

</script>
<template>
  <ContentDoc
    class="prose prose-bcGov dark:prose-invert min-w-full p-8"
    :query="{
      path: routeWithoutLocale,
      where: { _locale: locale }
    }"
  >
    <template #not-found>
      <div class="flex h-full flex-col items-center justify-center space-y-4">
        <h1 class="text-2xl font-semibold">
          {{ $t('page.notFound.h1') }}
        </h1>
        <div class="flex gap-4">
          <UButton
            :label="$t('btn.goBack')"
            @click="$router.back()"
          />
          <UButton
            :label="$t('btn.goHome')"
            variant="outline"
            :to="localePath('/')"
          />
        </div>
      </div>
    </template>
  </ContentDoc>
  <!-- <UButton
        :label="prev !== null ? prev.title : 'Alternate Label'"
        :to="prev !== null ? localePath(prev._path) : ''"
        :disabled="prev === null"
      />
      <UButton
        :label="next !== null ? next.title : 'Alternate Label'"
        :to="next !== null ? localePath(next._path) : ''"
        :disabled="next === null"
      /> -->
  <!-- <div
      v-else
      class="flex flex-col items-center justify-center"
    >
      Looks like we couldn't find the page you're looking for.
      Please refresh the page or go back
      <UButton label="Go Back" @click="$router.back()" />
    </div> -->
</template>
