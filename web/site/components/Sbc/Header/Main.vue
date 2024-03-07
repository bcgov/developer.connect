<script setup lang="ts">
const localePath = useLocalePath()

const mainLinks = [
  {
    label: 'btn.sbcConnect',
    to: '/'
  },
  {
    label: 'btn.products',
    to: '/products'
  },
  {
    label: 'btn.dashboard',
    to: '/sbc/dashboard'
  }
]
</script>
<template>
  <header
    id="bcros-main-header"
    class="border-b-2 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b-[1px] dark:bg-bcGovColor-darkGray"
  >
    <nav
      class="m-auto flex w-full max-w-[1360px] items-center justify-between"
      :aria-label="$t('SbcHeader.navLabel')"
    >
      <div class="flex items-center">
        <NuxtLinkLocale
          to="/"
          tabindex="-1"
          aria-hidden="true"
          class="mr-2"
        >
          <SbcLogo />
        </NuxtLinkLocale>
        <UButton
          v-for="link in mainLinks"
          :key="link.to"
          :label="$t(link.label)"
          :to="localePath(link.to)"
          color="white"
          variant="link"
          size="lg"
          active-class="underline"
        />
      </div>
      <div class="flex gap-1">
        <ColorModeSelect />
        <LocaleSelect />
      </div>
    </nav>
  </header>
</template>
