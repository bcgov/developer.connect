<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const items = [{
  slot: 'profile',
  label: 'Profile'
}, {
  slot: 'apiKeys',
  label: 'API Keys'
}, {
  slot: 'transactions',
  label: 'Transactions'
}
]

const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' })

const columns = [{
  key: 'name',
  label: 'Name'
}, {
  key: 'title',
  label: 'Title'
}, {
  key: 'email',
  label: 'Email'
}, {
  key: 'role',
  label: 'Role'
}, {
  key: 'actions'
}]

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
</script>
<template>
  <div class="mx-auto flex w-full flex-col p-8">
    <h1 class="text-4xl font-semibold text-bcGovColor-darkGray dark:text-white">
      Some Account
    </h1>
    <p class="text-bcGovColor-midGray dark:text-[#d1d5db]">
      Manage account information and view account activity
    </p>
    <UTabs :items="items" class="my-8 w-full">
      <template #profile="{ item }">
        <UCard>
          <template #header>
            <div class="flex items-center gap-4">
              <UAvatar
                size="3xl"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
              />
              <div class="flex flex-col">
                <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">John Doe</span>
                <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">jdoe@example.com</span>
              </div>
            </div>
          </template>

          <UFormGroup label="Name" name="name" class="mb-3">
            <UInput v-model="accountForm.name" />
          </UFormGroup>
          <UFormGroup label="Username" name="username">
            <UInput v-model="accountForm.username" />
          </UFormGroup>

          <template #footer>
            <UButton type="submit" color="black">
              Save account
            </UButton>
          </template>
        </UCard>
      </template>

      <template #apiKeys="{ item }">
        <UCard>
          <template #header>
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
          </template>

          <UTable :rows="people" :columns="columns">
            <template #actions-data="{ row }">
              <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </template>
          </UTable>

          <template #footer>
            <UButton type="submit" color="black">
              Save password
            </UButton>
          </template>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>
