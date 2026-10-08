<script setup lang="ts">
definePageMeta({
  layout: 'connect-base',
  breadcrumbs: [
    { label: 'Service BC Connect', to: 'https://bcregistry.gov.bc.ca' },
    { label: 'Service BC Connect Developer Site' }
  ]
})

const { t } = useI18n()
const localePath = useLocalePath()
useHead({
  title: `${t('page.home.title')} | Service BC Connect Developer Site`
})
</script>

<template>
  <div class="flex grow items-center justify-center py-12">
    <div class="mx-auto flex flex-col items-center gap-7 px-2 text-center sm:px-8 md:px-12 lg:px-16">
      <h1 class="text-3xl font-semibold text-neutral-highlighted dark:text-white">
        {{ $t('page.home.h1') }}
      </h1>
      <p class="text-lg text-neutral dark:text-white">
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
          link="https://github.com/bcgov/api.connect/discussions"
          external
        />
      </div>
    </div>
  </div>
</template>
