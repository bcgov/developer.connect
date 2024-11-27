<script setup lang="ts">
const {
  mainLinks,
  openMobileNav
  // loggedInUserOptions, leaving out auth options for now
  // loggedOutUserOptions
} = useSbcNav()
// const { t } = useI18n()
// const localePath = useLocalePath()
const headerRef = ref<HTMLElement | null>(null)
// const user = useCurrentUser()
// expose template ref to access properties in parent
defineExpose({
  headerRef
})
const transformLabel = (label) => {
  if (label === 'Service BC Connect') {
    return '<span class="text-white">Service</span><span class="text-bcGovColor-navDivider">BC</span> <span class="text-white">Connect</span>'
  }
  return label
}
</script>
<template>
  <header
    id="sbc-main-header"
    ref="headerRef"
    class="2xl h-16 left-1 border-b-[4px] border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b dark:bg-bcGovColor-darkGray"
  >
    <nav
      class="m-auto flex w-full max-w-[1312px] items-center justify-between"
      :aria-label="$t('SbcHeader.navLabel')"
    >
      <div class="flex items-center gap-x-8 h-12 min-w-96 min-h-12 pt-2.5 pb-2.5">
        <div class ="h-12">
        <NuxtLinkLocale
          to="/"
          tabindex="-1"
          aria-hidden="true"
          class="mr-2"
        >
          <SbcLogo />
        </NuxtLinkLocale>
      </div>
        <div
          v-for="link in mainLinks"
          :key="link.to"
          class=" flex hidden lg:block cursor-pointer w-60 h-7 font-sans font-bold text-lg leading-7 tracking-[ -0.48px ] text-left ">
          <NuxtLinkLocale :to="link.to">
            <span v-html="transformLabel(link.label)"></span>
          </NuxtLinkLocale>
      </div>
      </div>
      <div class="flex gap-1">
        <!-- <ColorModeSelect /> -->
        <!-- <LocaleSelect /> -->
        <!-- leaving out auth options for now -->
        <!-- <UDropdown
          v-if="!user"
          class="lg:hidden"
          :items="loggedOutUserOptions"
        >
          <UButton
            icon="i-mdi-account"
            color="white"
            variant="link"
          />
        </UDropdown>
        <UButton
          v-if="!user"
          label="Log in"
          :to="localePath('/sbc/auth/login')"
          color="white"
          variant="link"
          active-class="underline"
          class="hidden scale-90 font-normal lg:block"
        />
        <UButton
          v-if="!user"
          color="white"
          variant="link"
          label="Create Account"
          class="hidden scale-90 font-normal lg:block"
        />
        <UDropdown
          v-if="user"
          :items="loggedInUserOptions"
          :ui="{
            item: {
              disabled:
                'cursor-text select-text text-bcGovGray-900 dark:text-white opacity-100 font-semibold',
            }
          }"
        >
          <UButton
            color="white"
            variant="link"
          >
            <UAvatar
              :alt="user?.displayName![0] ?? 'U'"
              :ui="{
                background: 'bg-bcGovBlue-300 dark:bg-[#E0E7ED]',
                text: 'font-semibold leading-none text-white dark:text-bcGovColor-darkGray truncate',
                placeholder: 'font-semibold leading-none text-white truncate dark:text-bcGovColor-darkGray text-xl',
                rounded: 'rounded-sm'
              }"
            />
          </UButton>

          <template #account>
            <SbcHeaderAccountLabel
              :username="user?.displayName || 'U'"
              account-name=""
            />
          </template>
        </UDropdown> -->
        <UButton
          class="lg:hidden"
          icon="i-mdi-menu"
          color="white"
          variant="link"
          size="lg"
          :aria-label="$t('btn.openMainNav')"
          @click="openMobileNav"
        />
      </div>
    </nav>
  </header>
</template>
