<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale } = useI18n()

useHead({
  title: `${t('page.products.title')} | Service BC Connect Developer Site`
})

const { data: products } = await useAsyncData(
  'product-cards',
  () => {
    return queryContent()
      .where({ _locale: locale.value, _extension: { $eq: 'yml' } })
      .sort({ _dir: 1 })
      .find()
  },
  {
    watch: [locale]
  }
)
const completedProducts = computed(() => {
  return products.value?.sort((a, b) => a.name.localeCompare(b.name)) ?? []
})

setBreadcrumbs([
  { label: t('sbcBreadcrumb.default'), to: 'https://bcregistry.gov.bc.ca', external: true },
  { label: t('sbcBreadcrumb.sbcHome'), to: localePath('/') },
  { label: t('sbcBreadcrumb.sbcProductslist') }
])
</script>
<template>
  <div class="mx-auto w-full max-w-[1360px] p-2 sm:p-4 lg:p-8">
    <h1 class="mb-8 text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.products.h1') }}
    </h1>
    <ul class="mx-auto flex flex-wrap justify-center gap-8">
      <SbcDocsProductCard
        v-for="product in completedProducts"
        :key="product._dir"
        :name="product.name"
        :badge="product.badge"
        :description="product.description"
        :bullet-points="product.bulletPoints"
        :directory="product._dir"
      />
    </ul>
  </div>
</template>
