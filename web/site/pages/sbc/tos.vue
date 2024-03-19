<script setup lang="ts">
useHead({
  title: 'Service BC - API Terms of Use'
})

const { data } = await useAsyncData('sbc-tos', () => queryContent('/sbc/tos').findOne())

const selected = ref(true)
</script>
<template>
  <div class="prose prose-bcGov dark:prose-invert w-full p-2 md:min-w-[700px]">
    <h1 class="my-4 text-center">
      API Terms of Use
    </h1>
    <ContentRenderer :value="data" />
    <div class="flex w-full flex-col">
      <UCheckbox
        v-model="selected"
        label="I have read and accept the API Terms of Use"
        :ui="{
          label: 'font-semibold text-bcGovColor-darkGray dark:text-white',
          base: 'h-4 w-4 dark:checked:bg-[#7BB5EF] dark:checked:border-transparent dark:indeterminate:bg-[#7BB5EF] dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
        }"
      />
      <div class="ml-auto flex gap-4">
        <UButton label="Accept" />
        <UButton label="Decline" variant="outline" />
      </div>
    </div>
  </div>
</template>
