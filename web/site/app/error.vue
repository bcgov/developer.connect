<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps({
  error: { type: Object as () => NuxtError, default: undefined }
})

// TODO: update with other error codes?
const errorKey: string | number = props.error?.statusCode === 404 ? 404 : 'unknown'

useHead({
  title: errorKey === 404 ? t('page.error.404.title') : t('page.error.unknown.title')
})

const errorObj = {
  name: props.error?.name || '',
  cause: props.error?.cause || '',
  message: props.error?.message || '',
  statusCode: props.error?.statusCode || '',
  statusMessage: props.error?.statusMessage || '',
  stack: props.error?.stack || '',
  data: props.error?.data || ''
}

onMounted(() => {
  console.error('Nuxt Application Error: ', errorObj)
})
</script>
<template>
  <NuxtLayout name="default">
    <div class="m-auto flex h-dvh flex-col items-center justify-center gap-4">
      <h1 class="text-3xl font-bold text-bcGovColor-darkGray">
        {{ $t(`page.error.${errorKey}.h1`) }}
      </h1>
      <p class="text-bcGovColor-midGray">
        {{ $t(`page.error.${errorKey}.content`) }}
      </p>
      <UButton
        :label="$t('btn.goHome')"
        icon="i-mdi-home"
        :to="localePath('/')"
      />
    </div>
  </NuxtLayout>
</template>
