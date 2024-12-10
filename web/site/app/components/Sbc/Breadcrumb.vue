<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'
const { t } = useI18n()

const breadcrumbs = computed<BreadcrumbLink[]>(() => {
  const route = useRoute()

  if (route.meta.breadcrumbs) {
    return route.meta.breadcrumbs
  } else {
    return [{ label: t('sbcBreadcrumb.default') }]
  }
})

function resolveBackHref () {
  const bcLength = breadcrumbs.value.length

  if (bcLength > 1) {
    // return the second to last breadcrumb link
    return breadcrumbs.value[bcLength - 2]?.to ?? breadcrumbs.value[bcLength - 2]?.href
  } else {
    return ''
  }
}
</script>
<template>
  <div class="2xl: left-1 bg-bcGovColor-nonClickable sm:px-4">
    <div class="m-auto flex w-full max-w-[1312px] items-center justify-between">
      <div class="flex h-10 min-h-10 items-center">
        <UButton
          class="mr-3 mt-px size-[28px] rounded-full px-1 text-blue-500"
          color="white"
          :disabled="breadcrumbs.length <= 2"
          icon="i-mdi-arrow-left"
          :aria-label="$t('sbcBreadcrumb.backBtn')"
          data-cy="crumb-back"
          :to="resolveBackHref()"
        />
        <span class="text-white">|</span>
        <UBreadcrumb
          :links="breadcrumbs"
          :aria-label="$t('sbcBreadcrumb.arialabel')"
          class="flex min-w-0 flex-wrap items-center gap-x-1.5 pl-3 text-xs leading-6 text-white"
          :ui="{
            li: 'flex items-center gap-x-1.5 text-xs text-white leading-6 min-w-0',
            base: 'flex items-center gap-x-1.5 group font-normal min-w-0',
            label: 'block truncate tracking-wide',
            active: 'text-white',
            inactive: 'text-white underline hover:text-white',
            icon: {
              base: 'flex-shrink-0 w-3 h-3 text-white',
              active: '',
              inactive: '',
            },
          }"
        />
      </div>
    </div>
  </div>
</template>
