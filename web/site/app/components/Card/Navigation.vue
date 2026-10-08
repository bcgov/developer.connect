<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
  link: string
  external?: boolean
}>()
</script>

<template>
  <UCard
    class="relative w-[325px] cursor-pointer transition-colors hover:ring-2 hover:ring-gray-500 focus-within:ring-2 focus-within:ring-gray-500"
    :ui="{
      root: 'w-[325px] bg-white dark:bg-gray-800 rounded-sm shadow-sm ring-1 ring-gray-200 dark:ring-gray-700',
      body: 'w-[325px] h-full p-0 sm:p-0'
    }"
  >
    <div class="flex flex-col items-center justify-center gap-6 p-4 sm:px-10 sm:py-8">
      <h2 class="text-lg font-semibold uppercase text-neutral-highlighted dark:text-white">
        <NuxtLink :to="link" :target="external ? '_blank' : '_self'" class="focus:outline-none">
          {{ title }}
        </NuxtLink>
      </h2>
      <div class="flex size-16 items-center justify-center rounded-full bg-blue-350">
        <UIcon :name="icon" class="size-8 shrink-0 self-center text-white" />
      </div>
      <p class="text-sm text-neutral dark:text-gray-400 min-h-[48px] flex items-center justify-center text-center">
        {{ description }}
      </p>
      <span class="font-semibold tracking-wide text-primary underline dark:text-white">
        {{ $t('SbcMainCard.learnMore') }}
      </span>
    </div>
  </UCard>
</template>

<style scoped>
/* Set link to whole card while keeping link label the same as the card title */
a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}
</style>
