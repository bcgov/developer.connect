<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: t('page.home.title')
})
definePageMeta({
  layout: 'home'
})
</script>
<template>
  <div class="mx-auto flex flex-col items-center space-y-2 text-center">
    <h1 class="text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.home.h1') }}
    </h1>
    <p class="text-lg text-bcGovColor-lightGray dark:text-white">
      {{ $t('page.home.intro') }}
    </p>
    <UButton
      :label="$t('btn.getStarted')"
      :to="localePath('/get-started/account-setup')"
    />
  </div>
</template>
