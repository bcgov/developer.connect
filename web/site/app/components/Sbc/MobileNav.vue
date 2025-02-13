<script setup lang="ts">
defineProps<{
  accordianNavItems?: AccordianNavItem[] | undefined;
}>()
// const user = useCurrentUser()
const {
  mainLinks,
  mobileNavRef,
  // loggedInUserOptions, leave out auth options for now
  // loggedOutUserOptions,
  closeMobileNav
} = useSbcNav()
const localePath = useLocalePath()
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
          base: 'border-b-4 border-bcGovColor-navDivider dark:border-b-[1px] dark:bg-bcGovColor-darkGray',
          background: 'bg-bcGovColor-header dark:bg-bcGovColor-darkGray',
          padding: 'p-2'
        },
      }"
    >
      <template #header>
        <div class="m-auto flex w-full items-center justify-between">
          <div class="flex h-full items-center gap-2 sm:gap-5">
            <NuxtLink :to="localePath('/')" tabindex="-1" aria-hidden="true">
              <SbcLogo />
            </NuxtLink>
            <NuxtLink :to="localePath('/')" class="text-sm font-bold leading-5 lg:text-lg lg:leading-7">
              <span class="text-white">Service</span><span class="text-bcGovColor-navDivider">BC</span> <span class="text-white">Connect</span>
            </NuxtLink>
          </div>
          <div class="flex gap-1">
            <!-- <ColorModeSelect />
            <LocaleSelect /> -->
            <!-- leave out auth options for now -->
            <!-- <UDropdown
              v-if="!user"
              :items="loggedOutUserOptions"
            >
              <UButton
                icon="i-mdi-account"
                color="white"
                variant="link"
              />
            </UDropdown>
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
      <UDivider v-if="$route.path.includes('products')" class="my-4" />
      <SbcDocsSideNavigation v-if="$route.path.includes('products')" :nav-items="accordianNavItems" :is-mobile="true" />
    </UCard>
  </UModal>
</template>
