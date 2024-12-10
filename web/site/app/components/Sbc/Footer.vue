<script setup lang="ts">
const links = [
  {
    label: 'SbcFooter.home',
    to: '/'
  },
  {
    label: 'SbcFooter.disclaimer',
    to: 'https://www2.gov.bc.ca/gov/content/home/disclaimer',
    target: '_blank'
  },
  {
    label: 'SbcFooter.releaseNotes',
    to: 'https://www.release-notes.bcregistry.gov.bc.ca',
    target: '_blank'
  },
  {
    label: 'SbcFooter.privacy',
    to: 'https://www2.gov.bc.ca/gov/content/home/privacy',
    target: '_blank'
  },
  {
    label: 'SbcFooter.hours',
    to: 'https://www2.gov.bc.ca/gov/content?id=C41D8179671441B2BAA3BDDD3D89C9A9',
    target: '_blank'
  },
  {
    label: 'SbcFooter.ally',
    to: 'https://www2.gov.bc.ca/gov/content/home/accessibility',
    target: '_blank'
  },
  {
    label: 'SbcFooter.copyright',
    to: 'https://www2.gov.bc.ca/gov/content/home/copyright',
    target: '_blank'
  }
]
</script>

<template>
  <footer
    id="sbc-main-footer"
    class="inset-x-0 bottom-0 border-t-4 border-bcGovColor-navDivider bg-bcGovColor-footer p-2 dark:border-t dark:bg-bcGovColor-darkGray"
  >
    <div class="mx-auto max-w-[1360px] items-center">
      <nav
        :aria-label="$t('SbcFooter.navLabel')"
        class="flex flex-wrap gap-1 sm:flex-row sm:items-center sm:gap-4"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to === '/' ? `/${$i18n.locale}` : link.to"
          :target="link.target"
          class="rounded-none border-r-[0.25px] border-bcGovBlue-100 p-1 pr-2 text-sm text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {{ $t(link.label) }}
        </NuxtLink>
        <span
          class="ml-auto flex justify-center whitespace-nowrap italic text-bcGovColor-navDivider lg:pl-12"
        >
          {{ $t("SbcFooter.bcApp") }}
          <span class="flex h-6 justify-center"><UButton
            icon="i-heroicons-information-circle"
            variant="link"
          /></span>
        </span>
      </nav>
    </div>
  </footer>
</template>
