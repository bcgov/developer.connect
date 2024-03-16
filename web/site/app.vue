<script setup lang="ts">
const { locale } = useI18n()
const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => i18nHead.value.htmlAttrs!.dir
  }
})

// fetch content files using composable from nuxt-content https://content.nuxt.com/composables/fetch-content-navigation
const { data: navigation } = await useAsyncData(
  'content-navigation',
  () => fetchContentNavigation(
    queryContent('products') // pass custom query to fetchContentNavigation
      .where({ _locale: locale.value, _extension: { $eq: 'md' } }) // only return md files that match current locale
      .sort({ _dir: 1 }) // sort alphabetically
  ), {
    watch: [locale] // fetch new values whenever the locale changes
  }
)

// const navKey = Symbol('content-nav') as InjectionKey<string>

provide('navKey', navigation)
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
