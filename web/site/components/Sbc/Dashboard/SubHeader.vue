<script setup lang="ts">
const sandboxMode = ref(false)
</script>
<template>
  <div
    class="h-10 w-full border-b p-2 sm:px-4"
    :class="sandboxMode ? 'bg-bcGovColor-navDivider dark:border-bcGovColor-navDivider' : 'bg-white dark:bg-bcGovColor-darkGray border-bcGovGray-500'"
  >
    <div class="relative m-auto flex h-full max-w-[1360px] items-center justify-between">
      <!-- <UButton
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
        /> -->
      <span
        v-if="sandboxMode"
        class="absolute left-1/2 -translate-x-1/2 text-bcGovColor-darkGray"
      >
        <span class="inline-flex pb-0.5 align-middle">
          <UIcon name="i-mdi-information-slab-circle scale-150 mr-2" />
        </span>
        {{ $t('page.dashboard.sandboxMode.infoText') }}
      </span>
      <span
        class="ml-auto font-semibold"
        :class="sandboxMode ? 'text-bcGovColor-darkGray' : 'dark:text-white'"
      >
        {{ $t('page.dashboard.sandboxMode.text') }}
        <span class="ml-1 inline-flex align-middle">
          <UToggle
            v-model="sandboxMode"
            size="lg"
            :aria-label="sandboxMode ? $t('page.dashboard.sandboxMode.btnActive') : $t('page.dashboard.sandboxMode.btnInactive')"
          />
        </span>
      </span>
    </div>
  </div>
</template>
