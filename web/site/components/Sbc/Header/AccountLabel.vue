<script setup lang="ts">
defineProps({
  accountName: { default: 'N/A', type: String },
  username: { default: 'N/A', type: String }
})
</script>
<template>
  <div class="flex items-center">
    <UAvatar
      :alt="username[0]"
      size="sm"
      :ui="{
        background: 'bg-bcGovBlue-300 dark:bg-[#E0E7ED]',
        text: 'font-semibold leading-none text-white dark:text-bcGovColor-darkGray truncate',
        placeholder: 'font-semibold leading-none text-white truncate dark:text-bcGovColor-darkGray text-xl',
        rounded: 'rounded-sm'
      }"
    />
    <div class="mx-2 flex flex-col text-left font-normal tracking-wide">
      <span
        class="line-clamp-1 font-semibold text-bcGovColor-darkGray dark:text-white"
      >
        {{ username.toUpperCase() }}
      </span>
      <span
        class="line-clamp-1 text-bcGovColor-midGray dark:text-gray-300"
      >
        {{ accountName.toUpperCase() }}
      </span>
    </div>
  </div>
</template>
