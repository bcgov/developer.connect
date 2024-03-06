<script setup lang="ts">
// const { locale } = useI18n()
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

// const { data: navigation } = await useAsyncData(
//   'content-navigation',
//   () => {
//     return queryContent()
//       .where({ _locale: locale.value, _extension: { $eq: 'md' } })
//       .sort({ _dir: 1 })
//       .find()
//   },
//   {
//     watch: [locale]
//   }
// )

// console.log(navigation.value)
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
