<script setup lang="ts">
import { SbcHeaderMain } from '#components'
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

// template ref for header component
const headerRef = ref<InstanceType<typeof SbcHeaderMain> | null>(null)

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

const mainHeaderHeight = computed(() => headerRef.value?.headerRef?.clientHeight)

// provide nav items to use in docs/dashboard layouts
provide('docNavItems', docNavItems)
provide('dashNavItems', dashboardNavItems)
// provide main header height to offset sub headers/asides
provide('mainHeaderHeight', mainHeaderHeight)
</script>
<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain ref="headerRef" class="sticky inset-x-0 top-0 z-50" />
    <SbcMobileNav
      :accordian-nav-items="
        $route.path.includes('products') ? createContentNav(docNavItems!) :
        $route.path.includes('dashboard') ? dashboardNavItems : undefined
      "
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SbcFooter />
  </div>
</template>
