<script setup lang="ts">
const localePath = useLocalePath()
// temp items for dashboard - different than docs
const tempItems = [
  {
    label: 'Dashboard Nav Item',
    defaultOpen: true,
    children: [
      {
        label: 'Child 1',
        to: localePath('/sbc/dashboard')
      },
      {
        label: 'Child 2',
        to: localePath('/sbc/dashboard')
      }
    ]
  }
]
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain />
    <SbcDashboardSubHeader />
    <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
      <aside class="absolute hidden h-full min-w-fit flex-1 overflow-y-auto border-r border-bcGovGray-500 bg-bcGovColor-gray1 px-2 py-4 lg:static lg:col-start-1 lg:col-end-3 lg:block dark:bg-bcGovGray-900">
        <nav>
          <SbcAccordianNavigation :nav-items="tempItems" />
        </nav>
      </aside>
      <div class="w-full lg:col-span-full lg:col-start-4 xl:-ml-10">
        <slot />
      </div>
    </main>
    <SbcFooter />
  </div>
</template>
