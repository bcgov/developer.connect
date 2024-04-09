<script setup lang="ts">
const { t } = useI18n()
definePageMeta({
  layout: 'dashboard',
  middleware: 'require-auth'
})

useHead({
  title: t('page.dashboard.title')
})

const items = computed(() => {
  return [
    {
      slot: 'profile',
      label: t('page.dashboard.tabs.profile')
    },
    {
      slot: 'apiKeys',
      label: t('page.dashboard.tabs.apiKeys')
    }
  // not priority
  // {
  //   slot: 'transactions',
  //   label: 'Transactions'
  // }
  ]
})

</script>
<template>
  <div class="mx-auto flex w-full flex-col px-2 pb-4 pt-6 lg:p-8">
    <h1 class="text-4xl font-semibold text-bcGovColor-darkGray dark:text-white">
      Some Account
    </h1>
    <p class="text-bcGovColor-midGray dark:text-[#d1d5db]">
      {{ $t('page.dashboard.description') }}
    </p>
    <UTabs :items="items" class="mt-8 w-full">
      <template #profile>
        <SbcDashboardProfileCard class="mt-8" />
      </template>

      <template #apiKeys>
        <SbcDashboardTableApiKeys class="mt-8" />
      </template>

      <!-- leaving out for now, not priority -->
      <!-- <template #transactions="{ item }">
        <SbcDashboardTableTransactions />
      </template> -->
    </UTabs>
  </div>
</template>
