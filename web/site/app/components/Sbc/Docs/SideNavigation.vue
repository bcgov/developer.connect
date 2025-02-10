<script setup lang="ts">
const props = defineProps<{
  navItems: AccordianNavItem[] | undefined,
  isMobile: boolean | undefined,
}>()

const getStartedNavItems = computed(() => {
  return props.navItems?.filter(item => (item.children?.length ?? 0) > 1) || []
})

const exceptgetStartedNavItems = computed(() => {
  return props.navItems?.filter(item => item.children?.length === 1) || []
})

</script>
<template>
  <aside
    class="mx-2 min-w-56 max-w-min border-bcGovColor-hairlinesOnWhite"
    :class="{ 'border-r-2': !isMobile }"
    data-testid="docs-side-navigation"
  >
    <div class="flex items-center text-base font-semibold  uppercase text-bcGovColor-midGray">
      {{ $t('SbcNavigation.intro') }}
    </div>
    <SbcDocsAccordianNavigation :nav-items="getStartedNavItems" />
    <div class="flex items-center text-base font-semibold  uppercase text-bcGovColor-midGray">
      {{ $t('SbcNavigation.devproducts') }}
    </div>
    <div v-for="item in exceptgetStartedNavItems" :key="item.label">
      <ULink
        :to="item.children?.[0]?.to"
        active-class="text-primary-500 bg-bcGovColor-lightBlue font-semibold"
        :class="[
          'mx-6 flex h-[40px] min-h-9 w-[215px] items-center gap-3 rounded-none px-1 font-sans text-sm font-normal text-bcGovColor-midGray transition-colors duration-300 ease-in-out hover:bg-bcGovBlue-50 hover:font-semibold hover:text-bcGovColor-activeBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white dark:hover:bg-bcGovBlue-100/10 dark:focus-visible:outline-white '
        ]"
      >
        {{ item.label }}
      </ULink>
    </div>
  </aside>
</template>
