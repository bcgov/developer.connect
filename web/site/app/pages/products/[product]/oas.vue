<script setup lang="ts">
import { ApiReference } from '@scalar/api-reference'
import '@scalar/api-reference/style.css'

definePageMeta({ layout: 'connect-base' })
const localePath = useLocalePath()
const { config, productKey, productSpec } = useScalarConfig()
useContentPage()
</script>

<template>
  <div class="scalar-page-wrapper">
    <div
      v-if="!productSpec"
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <h2 class="text-xl font-bold text-gray-900">
        API Specification Not Found
      </h2>
      <p class="mt-2 text-sm text-neutral">
        No API specification found for product "{{ productKey }}".
      </p>
      <UButton
        label="Return to Products"
        :to="localePath('/products')"
        class="w-min mt-8"
      />
    </div>

    <ApiReference
      v-else
      :key="productKey"
      :configuration="config"
    />
  </div>
</template>

<style>
main.app-body:has(.scalar-page-wrapper) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
}

main.app-body:has(.scalar-page-wrapper) > .app-inner-container {
  max-width: 100% !important;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  overflow: visible !important;
}
</style>
