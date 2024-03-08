<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const items = [
  {
    slot: 'profile',
    label: 'Profile'
  },
  {
    slot: 'apiKeys',
    label: 'API Keys'
  }
  // not priority
  // {
  //   slot: 'transactions',
  //   label: 'Transactions'
  // }
]

</script>
<template>
  <div class="mx-auto flex w-full flex-col p-8">
    <h1 class="text-4xl font-semibold text-bcGovColor-darkGray dark:text-white">
      Some Account
    </h1>
    <p class="text-bcGovColor-midGray dark:text-[#d1d5db]">
      Manage account information and view account activity
    </p>
    <UTabs :items="items" class="mt-8 w-full">
      <template #profile="{ item }">
        <SbcDashboardProfileCard />
      </template>

      <template #apiKeys="{ item }">
        <SbcDashboardTableApiKeys />
      </template>

      <!-- leaving out for now, not priority -->
      <!-- <template #transactions="{ item }">
        <SbcDashboardTableTransactions />
      </template> -->
    </UTabs>
  </div>
</template>
