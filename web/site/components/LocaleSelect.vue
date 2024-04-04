<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// create usable array of options to match <UDropdown> type
const items = computed(() => {
  const options = locales.value.map((loc) => {
    const isCurrentLocal = loc.code === locale.value
    return {
      label: loc.name || 'N/A',
      icon: isCurrentLocal ? 'i-mdi-check' : '',
      to: switchLocalePath(loc.code)
    }
  })
  return [options]
})
</script>
<template>
  <UDropdown id="locale-select-dropdown" :items="items" mode="hover">
    <UButton
      icon="i-mdi-web"
      :aria-label="$t('LocaleSelect.label')"
      size="lg"
      color="white"
      :ui="{
        strategy: 'override',
        color: {
          white: {
            solid:
              'text-white dark:text-white hover:bg-white/[0.1] dark:bg-gray-900 dark:hover:bg-gray-800/75 focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-white transition-colors duration-300 ease-in-out'
          }
        }
      }"
    />
  </UDropdown>
</template>
