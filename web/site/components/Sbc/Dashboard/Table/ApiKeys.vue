<script setup lang="ts">
const columns = [{
  key: 'name',
  label: 'Name'
}, {
  key: 'environment',
  label: 'Environment'
}, {
  key: 'apiKey',
  label: 'API Key'
}, {
  key: 'actions',
  label: 'Actions'
}]

const people = [{
  id: 1,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}, {
  id: 2,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}, {
  id: 3,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}, {
  id: 4,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}, {
  id: 5,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}, {
  id: 6,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Some Key Here'
}]

const page = ref(1)
const pageItems = ref(Array(11))
</script>
<template>
  <UCard class="mt-8">
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
        Developer Access
      </h3>
      <p class="mt-1 text-bcGovColor-midGray dark:text-[#d1d5db]">
        Enabling developer access would allow you to integrate the BC Registries API services to your system.
      </p>
      <span class="-mt-1 mb-2 text-bcGovColor-midGray dark:text-[#d1d5db]">
        Learn more in the <UButton label="API documentation" variant="link" class="-mx-2 underline" to="/" />
      </span>
      <UButton
        label="Create Key"
        icon="i-mdi-plus"
        class="w-min whitespace-nowrap"
      />
    </div>

    <UTable :rows="people" :columns="columns">
      <template #actions-data="{ row }">
        <UButton variant="outline" label="Revoke" />
      </template>
    </UTable>

    <template #footer>
      <div class="flex">
        <UPagination v-model="page" :page-count="5" :total="pageItems.length" class="ml-auto" />
      </div>
    </template>
  </UCard>
</template>
