<script setup lang="ts">
import type {
  // FormError,
  FormSubmitEvent
} from '#ui/types'
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
  name: 'Name 1',
  environment: 'Prod',
  apiKey: 'Key 1'
}, {
  id: 2,
  name: 'Name 2',
  environment: 'Prod',
  apiKey: 'Key 2'
}, {
  id: 3,
  name: 'Name 3',
  environment: 'Prod',
  apiKey: 'Key 3'
}, {
  id: 4,
  name: 'Name 4',
  environment: 'Prod',
  apiKey: 'Key 4'
}, {
  id: 5,
  name: 'Name 5',
  environment: 'Prod',
  apiKey: 'Key 5'
}, {
  id: 6,
  name: 'Name 6',
  environment: 'Prod',
  apiKey: 'Key 6'
}]

const page = ref(1)
const pageItems = ref(Array(11))
const createKeyModal = ref(false)
const revokeKeyModal = ref(false)
const revokeData = ref({ name: '', id: '' })

const state = reactive({
  name: undefined
})

// const validate = (state: any): FormError[] => {
//   const errors = []
//   if (!state.name) {
//     errors.push({ path: 'name', message: 'Required' })
//   }
//   return errors
// }

function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

function initRevokeKey (id: string | number, name: string) {
  console.log('revoke key: ', id, name)
  revokeData.value.id = id.toString()
  revokeData.value.name = name
  revokeKeyModal.value = true
}
</script>
<template>
  <div>
    <UCard>
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
          @click="createKeyModal = true"
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
                class="absolute -top-4 left-full text-sm text-bcGovColor-darkGray dark:text-gray-300"
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
            @click="initRevokeKey(row.id, row.name)"
          />
        </template>
      </UTable>

      <template #footer>
        <div class="flex">
          <UPagination v-model="page" :page-count="5" :total="pageItems.length" class="ml-auto" />
        </div>
      </template>
    </UCard>
    <!-- <SbcDashboardModal
      v-model="createKeyModal"
      title="Create Key"
      content="A name is required to create a new key. Please enter a unique name below."
      form-label="Name"
      :submit-fn="onSubmit"
    />
    <SbcDashboardModal
      v-model="revokeKeyModal"
      title="Revoke Key"
      content="Are you sure you want to revoke this API key? This will permanently remove access to the key, current projects using this key may be affected."
      form-label="Name"
      :submit-fn="onSubmit"
    /> -->
    <UModal v-model="createKeyModal">
      <UCard>
        <template #header>
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">Create Key</span>
          </div>
        </template>
        <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">A name is required to create a new key. Please enter a unique name below.</span>
        <template #footer>
          <UForm :state="state" class="space-y-4" autocomplete="off" @submit="onSubmit">
            <UFormGroup label="Name" name="name">
              <UInput v-model="state.name" />
            </UFormGroup>

            <UButton type="submit">
              Submit
            </UButton>
          </UForm>
        </template>
      </UCard>
    </UModal>
    <UModal v-model="revokeKeyModal">
      <UCard>
        <template #header>
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">Revoke Key - {{ revokeData.name }}</span>
          </div>
        </template>
        <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">Are you sure you want to revoke this API key? This will permanently remove access to the key, current projects using this key may be affected.</span>
        <template #footer>
          <UForm :state="state" class="space-y-4" autocomplete="off" @submit="onSubmit">
            <UFormGroup :label="`Enter '${revokeData.name}' to confirm.`" name="name">
              <UInput v-model="state.name" />
            </UFormGroup>

            <UButton type="submit">
              Revoke
            </UButton>
          </UForm>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
