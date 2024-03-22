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
)

// console.log(products.value)
</script>
<template>
  <div class="mx-auto w-full max-w-[1360px] p-8">
    <h1 class="mb-8 text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.products.h1') }}
    </h1>
    <ul class="mx-auto flex flex-wrap justify-center gap-8">
      <SbcProductCard
        v-for="product in products"
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
