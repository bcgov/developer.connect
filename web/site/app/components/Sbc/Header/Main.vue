<script setup lang="ts">
const localePath = useLocalePath()
const { openMobileNav } = useSbcNav()
const headerRef = ref<HTMLElement | null>(null)
// const user = useCurrentUser()
// expose template ref to access properties in parent
defineExpose({
  headerRef
})
</script>
<template>
  <header
    id="sbc-main-header"
    ref="headerRef"
    class="h-16 border-b-4 border-bcGovColor-navDivider bg-bcGovColor-header p-2 sm:px-4 dark:border-b dark:bg-bcGovColor-darkGray"
  >
    <nav
      class="m-auto flex w-full max-w-[1360px] items-center justify-between"
      :aria-label="$t('SbcHeader.navLabel')"
    >
      <div class="flex h-full items-center gap-2 sm:gap-5">
        <NuxtLink :to="localePath('/')" tabindex="-1" aria-hidden="true">
          <SbcLogo />
        </NuxtLink>
        <NuxtLink :to="localePath('/')" class="text-sm font-bold leading-5 lg:text-lg lg:leading-7">
          <span class="text-white">Service</span><span class="text-bcGovColor-navDivider">BC</span> <span class="text-white">Connect</span>
        </NuxtLink>
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
