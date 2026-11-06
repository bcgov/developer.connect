<script setup lang="ts">
const route = useRoute()
const { navigationTree, prevItem, nextItem } = useContentNavigation()
const { docsKey } = useContentKeys()
const localePath = useLocalePath()

const { data: page } = await useAsyncData(
  () => `page-${route.path.toLowerCase()}`,
  () => queryCollection(docsKey.value).path(route.path.toLowerCase()).first(),
  { watch: [() => route.path] }
)
useContentPage(page)
</script>

<template>
  <ConnectLayout>
    <UPage
      :ui="{
        root: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-0 grow',
        center: 'h-full flex flex-col lg:col-span-8 lg:ps-8 lg:border-l-2 lg:border-gray-400 grow'
      }"
    >
      <template #left>
        <UPageAside>
          <UContentNavigation :navigation="navigationTree" />
        </UPageAside>
      </template>

      <div
        class="flex grow flex-col"
        :class="{ 'gap-4 lg:gap-8 pb-4 sm:pb-8': page }"
      >
        <div class="block lg:hidden pt-1.5">
          <UContentNavigation :navigation="navigationTree" :default-open="false" />
          <hr>
        </div>

        <template v-if="page">
          <ContentRenderer
            class="lg:pt-8"
            :value="page"
          />

          <hr>
        </template>

        <div v-else class="flex grow flex-col items-center justify-center">
          <h1 class="text-lg">
            {{ $t('page.notFound.h1') }}
          </h1>
          <p>{{ $t('page.notFound.description') }}</p>
          <UButton
            variant="link"
            :label="$t('label.returnToProducts')"
            :to="localePath('/products')"
          />
        </div>

        <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <UButton
            v-if="prevItem"
            :to="prevItem.to"
            :label="$t('label.previousTopic')"
            variant="outline"
            size="xl"
            leading-icon="i-mdi-chevron-left"
            class="w-full justify-center sm:w-fit"
          />

          <UButton
            v-if="nextItem"
            :to="nextItem.to"
            :label="$t('label.nextTopic')"
            size="xl"
            trailing-icon="i-mdi-chevron-right"
            class="w-full justify-center sm:w-fit"
          />
        </div>
      </div>
    </UPage>
  </ConnectLayout>
</template>
