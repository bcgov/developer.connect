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
    <div
      v-if="width < 1024"
      class="h-10 w-full border-b border-bcGovGray-500 bg-white p-2 sm:px-4 dark:bg-bcGovGray-900"
    >
      <div class="m-auto flex h-full max-w-[1360px] items-center">
        <UButton
          ref="ignoreElRef"
          :padded="false"
          :aria-label="sideNavOpen ? 'Close Navigation' : 'Open Navigation'"
          aria-haspopup="true"
          :aria-expanded="sideNavOpen"
          variant="link"
          color="gray"
          icon="i-mdi-menu"
          class="ml-2 scale-150"
          @click="sideNavOpen = !sideNavOpen"
        />
      </div>
    </div>
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
