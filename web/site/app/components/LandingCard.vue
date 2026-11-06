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
  <UPageCard
    :to="link"
    :target="external ? '_blank' : '_self'"
    :ui="{
      root: 'relative flex flex-col w-[325px] h-full rounded bg-white shadow cursor-pointer ring-0 hover:ring-2 '
        + 'focus-within:ring-2 ring-gray-500 overflow-hidden transition',
      container: 'relative flex flex-col items-center justify-center text-center p-4 sm:px-10 sm:py-8 gap-6 h-full',
      wrapper: 'flex flex-col items-center w-full gap-6',
      header: 'hidden',
      body: 'p-0 sm:p-0 flex flex-col items-center gap-6 w-full'
    }"
  >
    <h2 class="text-lg font-semibold uppercase text-neutral-highlighted">
      {{ title }}
    </h2>

    <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-mark">
      <UIcon :name="icon" class="size-8 shrink-0 text-white" />
    </div>

    <p class="text-sm">
      {{ description }}
    </p>

    <span class="font-bold tracking-wide text-primary underline">
      {{ $t('label.learnMore') }}
    </span>
  </UPageCard>
</template>
