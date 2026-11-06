import type { Collections } from '@nuxt/content'

type ProductPagesCollectionKey = Extract<keyof Collections, `docs_${string}`>
type ProductCardCollectionKey = Extract<keyof Collections, `product_cards_${string}`>

export const useContentKeys = () => {
  const normalizedLocale = computed(() => useNuxtApp().$i18n.locale.value.replace('-', ''))

  const docsKey = computed(() => `docs_${normalizedLocale.value}` as ProductPagesCollectionKey)
  const cardsKey = computed(() => `product_cards_${normalizedLocale.value}` as ProductCardCollectionKey)

  return {
    docsKey,
    cardsKey
  }
}
