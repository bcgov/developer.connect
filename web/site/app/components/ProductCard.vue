<script setup lang="ts">
const props = defineProps<{
  name: string
  description: string
  badge?: string
  bulletPoints?: string[]
  dir: string
}>()

// remove digit prefix in path name, set 'overview' as final route
const link = computed(() => `/${props.dir}`.replace(/\/\d+\./g, '/').replace('card', 'overview'))
</script>

<template>
  <UPageCard
    as="li"
    :to="link"
  >
    <template #header>
      <span class="text-white font-semibold tracking-wide" :class="{ 'w-4/5': badge }">
        {{ name }}
      </span>

      <span
        v-if="badge"
        class="absolute right-2 top-0 rounded-b bg-brand-inverted px-2 py-1 text-sm text-brand sm:right-7 font-bold"
      >
        {{ badge }}
      </span>
    </template>

    <template #body>
      <div class="flex flex-col text-neutral">
        <p class="mb-2 leading-relaxed text-neutral">
          {{ description }}
        </p>
        <ul
          v-if="bulletPoints?.length"
          class="list-[square] pl-4 font-semibold text-neutral marker:text-mark!"
        >
          <li
            v-for="item in bulletPoints"
            :key="item"
            class="mb-1"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </template>

    <template #footer>
      <span class="flex items-center font-semibold tracking-wide text-mark underline">
        <span>{{ $t('label.goToName', { name }) }}</span>
        <UIcon name="i-mdi-arrow-right-thin" class="scale-150 ml-2 inline-block align-middle" />
      </span>
    </template>
  </UPageCard>
</template>
