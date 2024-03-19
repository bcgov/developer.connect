<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
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
const { data: docNavItems } = await useAsyncData(
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

// dashboard page sub nav items
const dashboardNavItems = [
  {
    label: 'Dashboard Nav Item',
    defaultOpen: true,
    children: [
      {
        label: 'Child 1',
        to: localePath('/sbc/dashboard')
      },
      {
        label: 'Child 2',
        to: localePath('/sbc/dashboard')
      }
    ]
  }
]

provide('docNavItems', docNavItems)
provide('dashNavItems', dashboardNavItems)
</script>
<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain
      :accordian-items="
        $route.path.includes('products') ? createContentNav(docNavItems!) :
        $route.path.includes('dashboard') ? dashboardNavItems : undefined
      "
    />
    <SbcDashboardSubHeader v-if="$route.path.includes('dashboard')" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SbcFooter />
  </div>
</template>
