<script setup lang="ts">
const sandboxMode = ref(false)
</script>
<template>
  <div
    class="w-full border-b p-2 sm:px-4"
    :class="sandboxMode ? 'bg-bcGovColor-navDivider dark:border-bcGovColor-navDivider' : 'bg-white dark:bg-bcGovColor-darkGray border-bcGovGray-500'"
  >
    <div class="relative m-auto flex h-full max-w-[1360px] flex-col items-center justify-between gap-2 sm:flex-row">
      <span
        v-if="sandboxMode"
        class="flex items-center gap-1 text-bcGovColor-darkGray lg:absolute lg:left-1/2 lg:-translate-x-1/2"
      >
        <span class="inline-flex pb-0.5 align-middle">
          <UIcon name="i-mdi-information-slab-circle scale-150 mr-2" />
        </span>
        <span>{{ $t('page.dashboard.sandboxMode.infoText') }}</span>
      </span>
      <span
        class="ml-auto whitespace-nowrap font-semibold"
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
