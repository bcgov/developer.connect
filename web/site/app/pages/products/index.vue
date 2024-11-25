<script setup lang="ts">
const { t, locale } = useI18n()
useHead({
  title: t('page.products.title')
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
)//hiding cards till Feb 2025
const completedProducts = computed(() => {
  return products.value.filter(product => product.name !== 'Business Number' && product.name !== 'Product Name Here')
})
// console.log(products.value)
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
