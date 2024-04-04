<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: t('page.home.title')
})
</script>
<template>
  <div class="mx-auto flex flex-col items-center space-y-2 text-center">
    <h1 class="text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.home.h1') }}
    </h1>
    <p class="text-lg text-bcGovColor-midGray dark:text-white">
      {{ $t('page.home.intro') }}
    </p>
    <div class="flex items-center justify-center gap-4">
      <UButton
        :label="$t('btn.getStarted')"
        :to="localePath('/products/get-started/account-setup')"
      />
      <UButton
        :label="$t('btn.allProducts')"
        :to="localePath('/products')"
      />
    </div>
  </div>
</template>
