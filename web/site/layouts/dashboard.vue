<script setup lang="ts">
const { width } = useWindowSize()
const sideNavOpen = ref(false)
watch(
  width,
  () => {
    sideNavOpen.value = width.value >= 1024
  },
  { immediate: true }
)

const sideNavRef = ref(null)
const ignoreElRef = ref(null)

onClickOutside(sideNavRef, () => {
  if (sideNavOpen && width.value < 1024) {
    sideNavOpen.value = false
  }
}, { ignore: [ignoreElRef] })

</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-bcGovColor-gray1 dark:bg-bcGovGray-900"
  >
    <SbcHeaderMain />
    <SbcDashboardSubHeader />
    <main class="relative mx-auto flex w-full max-w-[1360px] grow flex-col lg:grid lg:grid-cols-12">
      <SbcSideNavigation
        ref="sideNavRef"
        class="absolute h-full -translate-x-full transition-transform duration-200 ease-in lg:static lg:col-start-1 lg:col-end-3"
        :class="sideNavOpen ? 'translate-x-0' : '-translate-x-full'"
      />
      <div class="w-full lg:col-span-full lg:col-start-4 xl:-ml-10">
        <slot />
      </div>
    </main>
    <SbcFooter />
  </div>
</template>
