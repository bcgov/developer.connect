<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const { text, copy, copied, isSupported } = useClipboard()

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
  apiKey: 'Key 1'
}, {
  id: 2,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Key 2'
}, {
  id: 3,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Key 3'
}, {
  id: 4,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Key 4'
}, {
  id: 5,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Key 5'
}, {
  id: 6,
  name: 'Some Name here',
  environment: 'Prod',
  apiKey: 'Key 6'
}]

const page = ref(1)
const pageItems = ref(Array(11))
const modalOpen = ref(false)

const state = reactive({
  name: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) {
    errors.push({ path: 'name', message: 'Required' })
  }
  return errors
}

function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>
<template>
  <div>
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
          @click="modalOpen = true"
        />
      </div>

      <UTable :rows="people" :columns="columns">
        <template #apiKey-data="{ row }">
          <span v-if="!isSupported">{{ row.apiKey }}</span>
          <button
            v-else
            class="flex flex-wrap items-center rounded-md border-2 border-transparent px-2.5 py-1.5 text-sm text-bcGovColor-midGray hover:text-bcGovColor-activeBlue hover:underline focus:outline-none focus-visible:border-2 focus-visible:border-bcGovBlue-500 focus-visible:outline-0 dark:text-gray-300 dark:hover:text-white dark:focus-visible:border-white"
            @click="copy(row.apiKey)"
          >
            <span class="relative">
              {{ row.apiKey }}
              <span class="inline-flex align-middle">
                <UIcon name="i-mdi-content-copy scale-150 ml-2" />
              </span>
              <span
                v-if="copied && text === row.apiKey"
                class="absolute -right-12 -top-4 text-sm text-bcGovColor-darkGray dark:text-gray-300"
              >
                Copied!
              </span>
            </span>
          </button>
        </template>
        <template #actions-data="{ row }">
          <UButton
            variant="outline"
            label="Revoke"
            @click="() => console.log('row id: ', row.id)"
          />
        </template>
      </UTable>

      <template #footer>
        <div class="flex">
          <UPagination v-model="page" :page-count="5" :total="pageItems.length" class="ml-auto" />
        </div>
      </template>
    </UCard>
    <UModal v-model="modalOpen">
      <UCard>
        <template #header>
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">Create a New Api Key</span>
            <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">A name is required to create a new key. Please enter a unique name.</span>
          </div>
        </template>
        <UForm :validate="validate" :state="state" class="space-y-4" autocomplete="off" @submit="onSubmit">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>
