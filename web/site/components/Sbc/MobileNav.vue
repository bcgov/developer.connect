<script setup lang="ts">
import type { DropdownItem } from '#ui/types'
import {
  signOut
} from 'firebase/auth'
defineProps<{
  accordianNavItems?: AccordianNavItem[] | undefined
}>()
const auth = useFirebaseAuth()!
const user = useCurrentUser()
const localePath = useLocalePath()
const { currentDir, tocLinks } = useDocPageData()
const { mainLinks, mobileNavRef, closeMobileNav } = useSbcNav()

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
  <UModal
    v-model="mobileNavRef"
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
              icon="i-mdi-window-close"
              color="white"
              variant="link"
              size="lg"
              :aria-label="$t('btn.closeMainNav')"
              @click="closeMobileNav"
            />
          </div>
        </div>
      </template>
      <UVerticalNavigation :links="mainLinks" />
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
      <SbcAccordianNavigation :nav-items="accordianNavItems" />
    </UCard>
  </UModal>
</template>
