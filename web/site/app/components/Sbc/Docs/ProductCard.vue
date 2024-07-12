<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()
const props = defineProps<{
  name: string
  description: string
  badge?: string
  bulletPoints?: string[]
  directory: string
}>()

// get the first file in the products list of md files
const { data } = await useAsyncData(`product-card-link-${props.directory}`, () => {
  return queryContent()
    .where({ _locale: locale.value, _extension: { $eq: 'md' }, _path: { $contains: `/products/${props.directory}` } })
    .findOne()
})

// return the localized link
const link = computed(() => {
  if (data.value?._path) {
    return localePath(data.value._path)
  }
})

function goToProduct () {
  return navigateTo(link.value)
}
</script>
<template>
  <li
    data-testid="product-card"
    class="flex h-[420px] w-[390px] cursor-pointer flex-col overflow-hidden rounded bg-white shadow-md transition-transform focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-bcGovGray-500 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-bcGovGray-500 dark:border dark:border-gray-300/50 dark:bg-bcGovColor-darkGray dark:focus-within:ring-1 dark:focus-within:ring-bcGovGray-100 dark:hover:ring-1 dark:hover:ring-bcGovGray-100"
    @click="goToProduct"
  >
    <div class="relative flex h-[60px] items-center bg-bcGovBlue-350 px-4 py-3.5 font-semibold tracking-wide lg:px-7 dark:border-b dark:border-gray-300/50 dark:bg-bcGovColor-darkGray">
      <a
        :href="link"
        class="text-white focus:outline-none"
        :class="{ 'w-4/5': badge }"
      >
        {{ name }}
      </a>
      <span v-if="badge" class="absolute right-2 top-0 rounded-b bg-bcGovColor-navDivider px-2 py-1 text-sm text-bcGovBlue-600 sm:right-7">{{ badge }}</span>
    </div>
    <div class="grow self-start px-4 py-3.5 text-left text-bcGovColor-midGray sm:p-7 dark:text-white">
      <p class="mb-2">
        {{ description }}
      </p>
      <ul v-if="bulletPoints" class="list-[square] pl-4 font-semibold text-bcGovColor-midGray marker:text-bcGovGray-400 dark:text-white">
        <li v-for="item in bulletPoints" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="px-4 pb-3.5 text-left sm:p-7">
      <span class="flex flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] underline dark:text-white">
        <span>
          {{ $t('SbcProductCard.goTo') }} {{ name }}
          <span class="inline-flex align-middle">
            <UIcon name="i-mdi-arrow-right-thin scale-150 ml-2" />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>
