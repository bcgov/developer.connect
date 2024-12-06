<script setup lang="ts">
defineProps<{
  accordianNavItems?: AccordianNavItem[] | undefined;
}>()
// const user = useCurrentUser()
const { currentDir, tocLinks } = useDocPageData()
const {
  mainLinks,
  mobileNavRef,
  // loggedInUserOptions, leave out auth options for now
  // loggedOutUserOptions,
  closeMobileNav
} = useSbcNav()
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
          <div
            class="flex h-12 min-h-12 items-center gap-3 py-2.5 sm:gap-5 md:gap-5 lg:gap-7"
          >
            <div class="flex">
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
              class="flex h-11 w-24 cursor-pointer text-left font-sans text-sm font-semibold leading-5 lg:h-7 lg:w-60 lg:text-lg lg:font-bold lg:leading-7"
            >
              <NuxtLinkLocale :to="link.to">
                <span v-if="link.label === 'Service BC Connect'">
                  <span class="text-white">Service</span><span class="text-bcGovColor-navDivider">BC</span> <span class="text-white">Connect</span>
                </span>
                <!-- <span v-else class="text-white">
                    {{ link.label }}
                  </span> -->
              </NuxtLinkLocale>
            </div>
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
      <UDivider
        v-show="tocLinks.length && $route.path.includes('products')"
        class="my-4"
      />
      <UAccordion
        v-show="tocLinks.length && $route.path.includes('products')"
        :items="[{ label: 'Table of Contents', defaultOpen: true }]"
      >
        <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
        <template #default="{ open }">
          <UButton variant="accordian_trigger">
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
          <SbcDocsTableOfContents
            class="-mt-2 ml-4"
            :hide-label="true"
            :toc-links="tocLinks"
            :current-dir="currentDir"
            @click="closeMobileNav"
          />
        </template>
      </UAccordion>
      <UDivider class="my-4" />
      <SbcDocsAccordianNavigation :nav-items="accordianNavItems" />
    </UCard>
  </UModal>
</template>
