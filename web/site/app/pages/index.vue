<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('page.home.title')
})
const localePath = useLocalePath()

</script>
<template>
  <div class="mx-auto flex flex-col items-center space-y-10 text-center">
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
      <UContainer class="h-full flex-col items-center justify-center">
        <UCard
          class="flex max-h-[300px] min-h-[350px] w-[300px] flex-col items-center justify-center  rounded-none"
          :ui="{
            background: 'bg-gray-50 dark:bg-gray-800/50',
            header: { base: 'font-bold text-lg text-center border-none' },
          }"
        >
          <div class="mb-4 text-center">
            <h2 class="p-3 text-xl font-semibold uppercase text-gray-800 dark:text-white">
              {{ $t('btn.getStarted') }}
            </h2>
          </div>

          <div class="mt-4 flex justify-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="#38598A" />
              <path
                d="M27.4167 26.8333L34.86 33.0983L33.8333 33.3083L33.0867 33.4483C32.3517 33.6 31.9317 34.4167 32.2583 35.0817L32.5733 35.7583L34.16 39.1883L32.5033 39.9583L30.9167 36.54L30.6133 35.8633C30.2983 35.175 29.4233 34.965 28.84 35.4433L28.245 35.91L27.4167 36.575V26.8333ZM26.5533 24.1383C26.3182 24.1383 26.0926 24.2317 25.9264 24.398C25.7601 24.5643 25.6667 24.7898 25.6667 25.025V38.3833C25.6667 38.8733 26.0633 39.27 26.5533 39.27C26.775 39.27 26.9617 39.2 27.1133 39.0833L29.3417 37.275L31.2783 41.4983C31.43 41.8133 31.745 42 32.0833 42C32.2117 42 32.34 42 32.4683 41.9067L35.6883 40.4133C36.1317 40.2033 36.3417 39.6667 36.1083 39.235L34.16 35L36.9717 34.475C37.1583 34.4167 37.3333 34.335 37.4733 34.1717C37.7883 33.7983 37.7417 33.25 37.3333 32.9117L27.1367 24.3367L27.125 24.3483C26.9733 24.22 26.775 24.1383 26.5533 24.1383ZM31.5 25.6667V23.3333H37.3333V25.6667H31.5ZM30.135 19.5533L33.4367 16.2517L35.0817 17.8967L31.78 21.1983L30.135 19.5533ZM25.6667 14H28V19.8333H25.6667V14ZM18.585 31.1033L21.8867 27.8017L23.5317 29.4467L20.23 32.7483L18.585 31.1033ZM18.585 17.8967L20.23 16.2517L23.5317 19.5533L21.8867 21.1983L18.585 17.8967ZM22.1667 25.6667H16.3333V23.3333H22.1667V25.6667Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="mt-4 text-center">
            <p class="text-gray-500 dark:text-gray-400">
              Start to set up Service BC Connect APIs in your applications.
            </p>
          </div>
          <div class="flex grow items-center justify-center px-4 pb-3.5 text-center sm:p-7">
            <NuxtLink
              :to="localePath('/products/get-started/account-setup')"
              class="flex flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] dark:text-white"
            >
              <span>
                {{ $t('SbcMainCard.learnMore') }}
                <span class="inline-flex align-middle">
                </span>
              </span>
            </NuxtLink>
          </div>
        </UCard>
      </UContainer>

      <UContainer class=" h-full flex-col items-center justify-center">
        <UCard
          class="flex max-h-[300px] min-h-[350px] w-[300px] flex-col items-center justify-center  rounded-none"
          :ui="{
            background: 'bg-gray-50 dark:bg-gray-800/50',
            header: { base: 'font-bold text-lg text-center border-none' },
          }"
        >
          <div class="mb-4 text-center">
            <h2 class="p-3 text-xl font-semibold uppercase text-gray-800 dark:text-white">
              {{ $t('btn.allProducts') }}
            </h2>
          </div>

          <div class="mt-4 flex justify-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="#38598A" />
              <path
                d="M32.6667 27.7705C36 27.7705 38.6667 30.3861 38.6667 33.6557C38.6667 34.8066 38.3333 35.8921 37.7467 36.7945L41.8533 40.8488L40 42.6667L35.84 38.6516C34.92 39.214 33.8267 39.541 32.6667 39.541C29.3333 39.541 26.6667 36.9253 26.6667 33.6557C26.6667 30.3861 29.3333 27.7705 32.6667 27.7705ZM32.6667 30.3861C31.7826 30.3861 30.9348 30.7306 30.3096 31.3438C29.6845 31.9569 29.3333 32.7886 29.3333 33.6557C29.3333 34.5229 29.6845 35.3545 30.3096 35.9677C30.9348 36.5808 31.7826 36.9253 32.6667 36.9253C33.5507 36.9253 34.3986 36.5808 35.0237 35.9677C35.6488 35.3545 36 34.5229 36 33.6557C36 32.7886 35.6488 31.9569 35.0237 31.3438C34.3986 30.7306 33.5507 30.3861 32.6667 30.3861ZM21.3333 31.694V34.3096H24C24.1867 36.3368 25.0667 38.1547 26.4133 39.541H18.6667C17.1867 39.541 16 38.3639 16 36.9253V18.6157C16 17.164 17.1867 16 18.6667 16H37.3333C38.0406 16 38.7189 16.2756 39.219 16.7661C39.719 17.2566 40 17.9219 40 18.6157V29.1175C38.4667 26.7373 35.76 25.1548 32.6667 25.1548C30.9733 25.1548 29.3867 25.6387 28.0533 26.4626H21.3333V29.0783H25.3333C24.8533 29.863 24.4533 30.7523 24.2267 31.694H21.3333ZM34.6667 23.847V21.2313H21.3333V23.847H34.6667Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="mt-4 text-center">
            <p class="text-gray-500 dark:text-gray-400">
              Learn about and try Service BC Connect products
            </p>
          </div>
          <div class="flex grow items-center justify-center px-4 pb-3.5 text-center sm:p-7">
            <NuxtLink
              :to="localePath('/products')"
              class="flex flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] dark:text-white"
            >
              <span>
                {{ $t('SbcMainCard.learnMore') }}
                <span class="inline-flex align-middle" />
              </span>
            </NuxtLink>
          </div>
        </UCard>
      </UContainer>
    </div>
  </div>
</template>
