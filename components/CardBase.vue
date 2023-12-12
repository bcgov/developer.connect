<script setup lang="ts">
  defineProps<{
    icon: string
    label: string
    detail: string
    path: string
    pathLabel: string
  }>()
</script>
<template>
  <div
    class="flex flex-col items-center p-9 justify-between text-center w-[27rem] h-[18.6rem] bg-white border rounded-md shadow-md"
  >
    <UIcon
      :name="`i-mdi-${icon}`"
      class="card-icon"
    />
    <div class="h-1/2 mb-6">
      <h2 class="pt-8 font-semibold text-2xl">{{ label }}</h2>
      <p>{{ detail }}</p>
    </div>

    <NuxtLink
      :to="path"
      class="text-BCgovLink cursor-pointer"
    >
      {{ pathLabel }}
    </NuxtLink>
  </div>
</template>
<style scoped>
  /* cant get this to work correctly using tailwind styles */
  .card-icon {
    font-size: 4rem;
    background: -webkit-linear-gradient(#b9d6f6, #1867c0);
    /* -webkit-background-clip: text; */
    /* background-clip: text; */
    -webkit-text-fill-color: transparent;
  }
</style>
