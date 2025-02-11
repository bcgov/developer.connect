<script setup lang="ts">
const props = defineProps<{
  title: string
  icon: string
  description: string
  link: string
}>()

function goToItem () {
  return navigateTo(props.link)
}
</script>
<template>
  <UCard
    :ui="{
      rounded: 'rounded',
      base: 'cursor-pointer focus-within:ring-2 focus-within:ring-gray-500 hover:ring-2 hover:ring-gray-500 transition-colors',
      body: {
        base: 'w-[325px] h-full',
        padding: 'sm:px-10 sm:py-8'
      },
    }"
  >
    <div
      class="flex flex-col items-center justify-center gap-6"
      @click="goToItem"
    >
      <h2 class="text-lg font-semibold uppercase text-bcGovColor-darkGray dark:text-white">
        <a
          :href="link"
          class="focus:outline-none"
        >
          {{ title }}
        </a>
      </h2>
      <div class="flex size-16 items-center justify-center rounded-full bg-bcGovColor-nonClickable">
        <UIcon :name="icon" class="size-8 shrink-0 self-center text-white " />
      </div>
      <p class="text-sm text-bcGovColor-midGray dark:text-gray-400">
        {{ description }}
      </p>
      <span class="font-semibold tracking-wide text-bcGovBlue-500 underline dark:text-white">
        {{ $t('SbcMainCard.learnMore') }}
      </span>
    </div>
  </UCard>
</template>
