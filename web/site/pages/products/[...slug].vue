<script setup lang="ts">
definePageMeta({
  layout: 'docs'
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
    class="prose prose-bcGov dark:prose-invert min-w-full px-2 py-6"
    :query="{
      path: $route.path.replace(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//, '/'),
      where: { _locale: $i18n.locale }
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
            :to="`/${$i18n.locale}`"
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
