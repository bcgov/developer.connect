<script setup lang="ts">
defineProps<{
  accordianItems?: AccordianNavItem[] | undefined
}>()

const localePath = useLocalePath()
const { t } = useI18n()
const mobileNav = ref(false)
const { currentDir, tocLinks } = useDocPageData()

const mainLinks = computed(() => {
  return [
    {
      icon: 'i-mdi-home',
      label: t('btn.sbcConnect'),
      to: localePath('/')
    },
    {
      icon: 'i-mdi-database',
      label: t('btn.products'),
      to: localePath('/products')
    },
    {
      icon: 'i-mdi-account',
      label: t('btn.dashboard'),
      to: localePath('/sbc/dashboard')
    },
    {
      icon: 'i-mdi-book-open-variant',
      label: 'Docs',
      to: localePath('/products/get-started/account-setup')
    }
  ]
})

// delay mobile menu closing for smoother feel
async function closeMobileNav () {
  await nextTick()
  setTimeout(() => {
    mobileNav.value = false
  }, 150)
}
</script>
<template>
  <div>
    <header
      id="bcros-main-header"
      class="relative border-b-2 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b dark:bg-bcGovColor-darkGray"
    >
      <nav
        class="m-auto flex w-full max-w-[1360px] items-center justify-between"
        :aria-label="$t('SbcHeader.navLabel')"
      >
        <div class="flex items-center gap-1">
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
            class="hidden lg:block"
            :label="link.label"
            :to="link.to"
            color="white"
            variant="link"
            size="lg"
            active-class="underline"
          />
        </div>
        <div class="flex gap-1">
          <ColorModeSelect />
          <LocaleSelect />
          <UButton
            class="lg:hidden"
            icon="i-mdi-menu"
            color="white"
            variant="link"
            size="lg"
            :aria-label="$t('btn.openMainNav')"
            @click="mobileNav = true"
          />
        </div>
      </nav>
    </header>
    <UModal
      v-model="mobileNav"
      fullscreen
      :transition="false"
      :ui="{
        overlay: {
          base: 'fixed inset-0 transition-none',
        }
      }"
    >
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow bg-bcGovGray-100 dark:bg-bcGovColor-darkGray',
            padding: 'p-2'
          },
          header: {
            base: 'border-b-2 border-bcGovColor-navDivider dark:border-b-[1px] dark:bg-bcGovColor-darkGray',
            background: 'bg-bcGovColor-header dark:bg-bcGovColor-darkGray',
            padding: 'p-2'
          }
        }"
      >
        <template #header>
          <div class="m-auto flex w-full items-center justify-between">
            <div class="flex items-center gap-1">
              <NuxtLinkLocale
                to="/"
                tabindex="-1"
                aria-hidden="true"
                class="mr-2"
              >
                <SbcLogo />
              </NuxtLinkLocale>
            </div>
            <div class="flex gap-1">
              <ColorModeSelect />
              <LocaleSelect />
              <UButton
                class="lg:hidden"
                icon="i-mdi-window-close"
                color="white"
                variant="link"
                size="lg"
                :aria-label="$t('btn.closeMainNav')"
                @click="mobileNav = false"
              />
            </div>
          </div>
        </template>
        <UVerticalNavigation :links="mainLinks" @click="closeMobileNav" />
        <UDivider v-show="tocLinks.length && $route.path.includes('products')" class="my-4" />
        <UAccordion v-show="tocLinks.length && $route.path.includes('products')" :items="[{label: 'Table of Contents', defaultOpen: true}]">
          <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
          <template #default="{ open }">
            <UButton
              variant="accordian_trigger"
            >
              <span class="truncate">Table of Contents</span>

              <template #trailing>
                <UIcon
                  name="i-mdi-menu-up"
                  class="ms-auto size-7 transition-transform duration-200"
                  :class="[!open && 'rotate-180']"
                />
              </template>
            </UButton>
          </template>
          <!-- item slot is the content inside each accordian, pass toc component into item slot of accordian -->
          <template #item>
            <SbcTableOfContents
              class="-mt-2 ml-4"
              :hide-label="true"
              :toc-links="tocLinks"
              :current-dir="currentDir"
              @click="closeMobileNav"
            />
          </template>
        </UAccordion>
        <UDivider class="my-4" />
        <SbcAccordianNavigation :nav-items="accordianItems" @close-mobile="closeMobileNav" />
      </UCard>
    </UModal>
  </div>
</template>
