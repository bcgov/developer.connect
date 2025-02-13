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
    class="inset-x-0 bottom-0 border-t-2 border-bcGovColor-navDivider bg-bcGovColor-footer p-2"
  >
    <div class="mx-auto max-w-bcGovLg flex-wrap items-center justify-between gap-1 md:flex">
      <nav
        :aria-label="$t('SbcFooter.navLabel')"
        class="flex flex-wrap divide-x divide-blue-100 sm:flex-row sm:items-center"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to === '/' ? `/${$i18n.locale}` : link.to"
          :target="link.target"
          class="rounded-none px-2 text-sm text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {{ $t(link.label) }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-1">
        <span class="whitespace-nowrap text-sm italic text-bcGovColor-navDivider">{{ $t("SbcFooter.bcApp") }}</span>
        <UTooltip :text="useRuntimeConfig().public.version">
          <UIcon name="i-mdi-info-outline" class="size-5 shrink-0 text-white" />
        </UTooltip>
      </div>
    </div>
  </footer>
</template>
