<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
useHead({
  title: `${t('page.home.title')} | Service BC Connect Developer Site`
})

setBreadcrumbs([
  { label: t('sbcBreadcrumb.default'), to: 'https://bcregistry.gov.bc.ca', external: true },
  { label: t('sbcBreadcrumb.sbcHome') }
])
</script>
<template>
  <div class="mx-auto flex flex-col items-center gap-7 px-2 py-12 text-center sm:px-8 md:px-12 lg:px-16">
    <h1 class="text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.home.h1') }}
    </h1>
    <p class="text-lg text-bcGovColor-midGray dark:text-white">
      {{ $t('page.home.intro') }}
    </p>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <CardNavigation
        :title="$t('label.getStarted')"
        :description="$t('text.getStarted')"
        icon="i-mdi-cursor-default-click"
        :link="localePath('/products/get-started/account-setup')"
      />
      <CardNavigation
        :title="$t('label.allProducts')"
        :description="$t('text.allProducts')"
        icon="i-mdi-text-box-search"
        :link="localePath('/products')"
      />
      <CardNavigation
        :title="$t('label.userForum')"
        :description="$t('text.userForum')"
        icon="i-mdi-comment-text-outline"
        link="https://discourse.onebc.ca/"
        external
      />
    </div>
  </div>
</template>
