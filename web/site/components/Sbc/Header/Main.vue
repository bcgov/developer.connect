<template>
  <header
    id="bcros-main-header"
    class="border-b-2 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b-[1px] dark:bg-bcGovColor-darkGray"
  >
    <div
      class="m-auto flex w-full max-w-[1360px] items-center justify-between"
    >
      <NuxtLink
        data-cy="bcros-main-header-home-redirect"
        class="flex cursor-pointer items-center rounded-md px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        :to="`/${$i18n.locale}`"
        :aria-label="$t('SbcHeader.logoBtnLabel')"
      >
        <SbcLogo />
        <span
          class="ml-2 flex flex-wrap text-base font-bold text-white hover:underline sm:ml-4 sm:text-lg"
        >
          {{ $t('SbcHeader.title') }}
        </span>
      </NuxtLink>
      <div class="flex gap-1">
        <ColorModeSelect />
        <LocaleSelect />
      </div>
    </div>
  </header>
</template>
