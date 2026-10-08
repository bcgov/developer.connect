<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

const props = defineProps<{
  name: string
  description: string
  badge?: string
  bulletPoints?: string[]
  directory: string
}>()

// Query content to find the entry point document for this product
const { data } = await useAsyncData(`product-card-link-${props.directory}`, () => {
  return queryContent()
    .where({
      _locale: locale.value,
      _extension: { $eq: 'md' },
      _path: { $contains: `/products/${props.directory}` }
    })
    .findOne()
})

const link = computed(() => {
  if (data.value?._path) {
    return localePath(data.value._path)
  }
  return localePath(`/products/${props.directory}`)
})

function goToProduct() {
  if (link.value) {
    return navigateTo(link.value)
  }
}
</script>

<template>
  <li
    data-testid="product-card"
    class="flex h-[420px] w-[390px] cursor-pointer flex-col overflow-hidden rounded bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-350 focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-350 dark:border dark:border-gray-700 dark:bg-gray-800"
    @click="goToProduct"
  >
    <div class="relative flex h-[60px] items-center bg-blue-350 px-4 py-3.5 font-bold tracking-wide lg:px-7 dark:border-b dark:border-gray-700">
      <NuxtLink
        :to="link"
        class="text-white text-base font-bold focus:outline-none"
        :class="{ 'w-4/5': badge }"
      >
        {{ name }}
      </NuxtLink>
      <span
        v-if="badge"
        class="absolute right-2 top-0 rounded-b bg-[#FCBA19] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#002753] sm:right-7"
      >
        {{ badge }}
      </span>
    </div>

    <div class="grow self-start px-4 py-3.5 text-left text-neutral sm:p-7 dark:text-gray-300">
      <p class="mb-2 text-sm text-neutral dark:text-gray-300 leading-normal">
        {{ description }}
      </p>
      <ul
        v-if="bulletPoints && bulletPoints.length"
        class="list-[square] pl-4 text-sm font-semibold text-neutral-highlighted marker:text-gray-400 space-y-1 dark:text-white"
      >
        <li v-for="item in bulletPoints" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="px-4 pb-3.5 text-left sm:p-7">
      <span class="flex flex-wrap items-center font-semibold tracking-wide text-primary underline dark:text-white">
        {{ t('SbcProductCard.goTo') }} {{ name }}
      </span>
    </div>
  </li>
</template>
