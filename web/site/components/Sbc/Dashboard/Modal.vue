<script setup lang="ts">
// import type { FormError, FormSubmitEvent } from '#ui/types'

defineProps<{
  title: string,
  content: string,
  formLabel: string,
  submitFn: Function
}>()

const modalOpen = defineModel({ type: Boolean, default: false })

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

// function onSubmit (event: FormSubmitEvent<any>) {
//   // Do something with data
//   console.log(event.data)
// }

watch(modalOpen, () => {
  if (!modalOpen.value) {
    state.name = undefined
  }
})
</script>
<template>
  <UModal v-model="modalOpen">
    <UCard>
      <template #header>
        <div class="flex flex-col">
          <span class="text-lg font-semibold text-bcGovColor-darkGray dark:text-white">{{ title }}</span>
        </div>
      </template>
      <span class="text-bcGovColor-midGray dark:text-[#d1d5db]">{{ content }}</span>
      <template #footer>
        <UForm :state="state" class="space-y-4" autocomplete="off" @submit="submitFn">
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
</template>
