<script setup lang="ts">
import type { AccordianNavItem } from '~/types/accordian-nav-item'

const props = defineProps<{
  navItems: AccordianNavItem[] | undefined
  isMobile?: boolean
}>()

const route = useRoute()

const getStartedNavItems = computed(() => {
  return props.navItems?.filter(item => (item.children?.length ?? 0) > 1) || []
})

const productNavItems = computed(() => {
  return props.navItems?.filter(item => item.children?.length === 1) || []
})

// State for accordion open/close, default open
const openSections = ref<Record<string, boolean>>({
  'Get Started': true
})

function toggleSection(label: string) {
  openSections.value[label] = !openSections.value[label]
}
</script>

<template>
  <aside
    class="flex flex-col text-sm"
    :class="{ 'w-64 min-w-[240px] pr-4 border-r border-gray-200 dark:border-gray-800': !isMobile }"
    data-testid="docs-side-navigation"
  >
    <!-- Section: INTRODUCTION -->
    <div class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      {{ $t('SbcNavigation.intro', 'INTRODUCTION') }}
    </div>

    <!-- Get Started Accordion -->
    <div v-for="section in getStartedNavItems" :key="section.label" class="mb-2">
      <button
        type="button"
        class="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 rounded"
        @click="toggleSection(section.label)"
      >
        <span>{{ section.label }}</span>
        <UIcon
          name="i-mdi-chevron-up"
          class="size-5 shrink-0 transition-transform duration-200"
          :class="{ 'rotate-180': !openSections[section.label] }"
        />
      </button>

      <div v-show="openSections[section.label] !== false" class="mt-1 flex flex-col space-y-0.5 pl-2">
        <NuxtLink
          v-for="child in section.children"
          :key="child.to"
          :to="child.to"
          class="group flex items-center px-3 py-2 text-sm transition-colors rounded-r"
          :class="[
            route.path === child.to
              ? 'bg-[#E4EDF7] font-semibold text-[#1669BB] border-l-4 border-[#1669BB] dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-400'
              : 'text-gray-700 hover:bg-blue-50/50 hover:text-[#1669BB] hover:font-medium dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 border-l-4 border-transparent'
          ]"
        >
          {{ child.label }}
        </NuxtLink>
      </div>
    </div>

    <!-- Section: DEVELOPER PRODUCTS -->
    <div class="mt-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      {{ $t('SbcNavigation.devproducts', 'DEVELOPER PRODUCTS') }}
    </div>

    <!-- Developer Products Direct Links -->
    <div class="flex flex-col space-y-0.5">
      <NuxtLink
        v-for="item in productNavItems"
        :key="item.label"
        :to="item.children?.[0]?.to"
        class="group flex items-center px-3 py-2 text-sm transition-colors rounded-r"
        :class="[
          route.path === item.children?.[0]?.to
            ? 'bg-[#E4EDF7] font-semibold text-[#1669BB] border-l-4 border-[#1669BB] dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-400'
            : 'text-gray-700 hover:bg-blue-50/50 hover:text-[#1669BB] hover:font-medium dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 border-l-4 border-transparent'
        ]"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </aside>
</template>
