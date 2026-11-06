<script setup lang="ts">
definePageMeta({ layout: 'connect-base' })

const { locale } = useI18n()
const { cardsKey } = useContentKeys()
useContentPage()

const { data: products } = await useAsyncData(
  cardsKey.value,
  () => queryCollection(cardsKey.value)
    .all()
    .then(cards => cards.toSorted((a, b) => a.name.localeCompare(b.name))),
  { watch: [locale] }
)
</script>

<template>
  <UContainer :ui="{ base: 'grow mx-auto flex flex-col justify-center' }">
    <h1 class="mb-8">
      {{ $t('page.products.h1') }}
    </h1>
    <ul class="mx-auto flex flex-wrap justify-center gap-8">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :name="product.name"
        :description="product.description"
        :badge="product.badge"
        :bullet-points="product.bulletPoints"
        :dir="product.stem"
      />
    </ul>
  </UContainer>
</template>
