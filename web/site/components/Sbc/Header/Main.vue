<script setup lang="ts">
import type { DropdownItem } from '#ui/types'
import {
  signOut
} from 'firebase/auth'
const auth = useFirebaseAuth()! // only exists on client side
const { mainLinks, openMobileNav } = useSbcNav()
// const { t } = useI18n()
const localePath = useLocalePath()
const headerRef = ref<HTMLElement | null>(null)
const user = useCurrentUser()
// expose template ref to access properties in parent
defineExpose({
  headerRef
})

const loggedInMenuOptions = computed<DropdownItem[][]>(() => {
  return [
    [
      {
        label: 'Account',
        slot: 'account',
        disabled: true
      },
      {
        label: 'Log out',
        // label: t('BcrosHeader.menu.account.logout'),
        icon: 'i-mdi-logout',
        click: () => signOut(auth)
        // to: localePath('/sbc/auth/logout')
      }
    ]
  ]
})
</script>
<template>
  <header
    id="sbc-main-header"
    ref="headerRef"
    class="border-b-2 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b dark:bg-bcGovColor-darkGray"
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
          v-if="!user"
          label="Log in"
          :to="localePath('/sbc/auth/login')"
          color="white"
          variant="link"
          active-class="underline"
          class="scale-90 font-normal"
        />
        <UButton
          v-if="!user"
          color="white"
          variant="link"
          label="Create Account"
          class="scale-90 font-normal"
        />
        <UDropdown
          v-if="user"
          :items="loggedInMenuOptions"
          :popper="{ placement: 'bottom-end' }"
          :ui="{
            width: '',
            padding: 'p-2',
            item: {
              disabled:
                'cursor-text select-text text-bcGovGray-900 dark:text-white opacity-100 font-semibold',
              icon: {
                base: 'flex-shrink-0 h-6 w-6',
                active: 'text-gray-500 dark:text-gray-400',
                inactive: 'text-bcGovGray-600 dark:text-gray-500'
              }
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
        </UDropdown>
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
