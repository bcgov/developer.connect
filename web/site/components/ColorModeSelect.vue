<template>
  <UButton
    :icon="$colorMode.preference === 'light' ? 'i-mdi-white-balance-sunny' : 'i-mdi-moon-waning-crescent'"
    :aria-label="$colorMode.preference === 'light' ? $t('ColorModeSelect.light') : $t('ColorModeSelect.dark')"
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
    @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
  />
</template>
