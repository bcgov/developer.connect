<script setup lang="ts">
definePageMeta({ layout: 'connect-base' })
const localePath = useLocalePath()
useContentPage()
</script>

<template>
  <UContainer :ui="{ base: 'grow mx-auto text-center flex flex-col justify-center' }">
    <h1>
      {{ $t('page.home.h1') }}
    </h1>
    <p class="text-lg">
      {{ $t('page.home.description') }}
    </p>
    <div class="flex flex-wrap items-center justify-center gap-8">
      <LandingCard
        :title="$t('label.GET_STARTED')"
        :description="$t('text.getStarted')"
        icon="i-mdi-cursor-default-click"
        :link="localePath('/get-started/account-setup')"
      />
      <LandingCard
        :title="$t('label.ALL_PRODUCTS')"
        :description="$t('text.allProducts')"
        icon="i-mdi-text-box-search"
        :link="localePath('/products')"
      />
      <LandingCard
        :title="$t('label.USER_FORUM')"
        :description="$t('text.userForum')"
        icon="i-mdi-comment-text-outline"
        link="https://github.com/bcgov/api.connect/discussions"
        external
      />
    </div>
  </UContainer>
</template>
