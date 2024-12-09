<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('page.home.title')
})
const localePath = useLocalePath()

</script>
<template>
  <div class="mx-auto flex flex-col items-center space-y-7 px-6 py-12 text-center sm:px-8 md:px-12 lg:px-16">
    <h1 class="text-3xl font-semibold text-bcGovColor-darkGray dark:text-white">
      {{ $t('page.home.h1') }}
    </h1>
    <p class="text-lg text-bcGovColor-midGray dark:text-white">
      {{ $t('page.home.intro') }}
    </p>
    <div class="flex items-center justify-center gap-4">
      <!-- <UButton
        :label="$t('btn.getStarted')"
        :to="localePath('/products/get-started/account-setup')"
      />
      <UButton
        :label="$t('btn.allProducts')"
        :to="localePath('/products')"
      /> -->
      <UContainer class="flex h-full flex-col items-center justify-center gap-10 overflow-y-auto lg:flex-row">
        <UCard
          class="flex max-h-[300px] min-h-[350px] w-[325px] flex-col items-center justify-center  rounded-none shadow"
          :ui="{
            background: 'bg-gray-50 dark:bg-gray-800/50',
            header: { base: 'font-bold text-lg text-center border-none' },
          }"
        >
          <div class="mb-4 text-center">
            <h2 class=" text-xl font-semibold uppercase text-gray-800 dark:text-white">
              {{ $t('btn.getStarted') }}
            </h2>
          </div>
          <div class="flex h-16 items-center justify-center">
            <div class="mt-4 flex size-16 items-center justify-center rounded-full bg-bcGovColor-nonClickable">
              <div class="flex items-center justify-center">
                <UIcon name="i-mdi-cursor-default-click" class="ms-auto size-8 shrink-0 text-white " />
              </div>
            </div>
          </div>
          <div class="mx-auto mt-4 max-w-5xl text-center">
            <p class="text-bcGovColor-midGray dark:text-gray-400">
              Start to set up Service BC Connect APIs in your applications.
            </p>
          </div>
          <div class="flex grow items-center justify-center px-4 pb-3.5 text-center sm:p-7">
            <NuxtLink
              :to="localePath('/products/get-started/account-setup')"
              class="flex cursor-pointer flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] underline dark:text-white"
            >
              {{ $t('SbcMainCard.learnMore') }}
            </NuxtLink>
          </div>
        </UCard>

        <UCard
          class="flex max-h-[300px] min-h-[350px] w-[325px] flex-col items-center justify-center  rounded-none shadow"
          :ui="{
            background: 'bg-gray-50 dark:bg-gray-800/50',
            header: { base: 'font-bold text-lg text-center border-none' },
          }"
        >
          <div class="mb-4 text-center">
            <h2 class="text-xl font-semibold uppercase text-gray-800 dark:text-white">
              {{ $t('btn.allProducts') }}
            </h2>
          </div>
          <div class="flex h-16 items-center justify-center">
            <div class="mt-4 flex size-16 items-center justify-center rounded-full bg-bcGovColor-nonClickable">
              <div class="flex items-center justify-center">
                <UIcon name="i-mdi-text-box-search" class="ms-auto size-8 shrink-0 text-white " />
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <p class="text-bcGovColor-midGray dark:text-gray-400">
              Learn about and try Service BC Connect products
            </p>
          </div>
          <div class="flex grow items-center justify-center px-4 pb-3.5 text-center sm:p-7">
            <NuxtLink
              :to="localePath('/products')"
              class="flex cursor-pointer flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] underline dark:text-white"
            >
              {{ $t('SbcMainCard.learnMore') }}
            </NuxtLink>
          </div>
        </UCard>
      </UContainer>
    </div>
  </div>
</template>
