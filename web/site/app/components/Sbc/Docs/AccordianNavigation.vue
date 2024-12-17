<script setup lang="ts">
defineProps<{
  navItems: AccordianNavItem[] | undefined
}>()

</script>
<template>
  <nav class="flex flex-col">
    <!-- creates an accordian for each object in navItems array -->
    <UAccordion
      :items="navItems || []"
      multiple
    >
      <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
      <template #default="{ item, open }">
        <UButton
          variant="accordian_trigger"
          :aria-label="item.label"
        >
          <span class="flex-1 text-left">{{ item.label }}</span>
          <template #trailing>
            <UIcon
              name="i-mdi-menu-up"
              class="ms-auto size-7 shrink-0 transition-transform duration-200"
              :class="[!open && 'rotate-180']"
            />
          </template>
        </UButton>
      </template>
      <!-- item slot is the content inside each accordian, so for each accordian item, pass the children array into UVerticalNavigation -->
      <template #item="{ item }">
        <UVerticalNavigation
          :aria-label="item.label"
          class="mx-6 min-h-9 items-center border-s-2 border-bcGovGray-300"
          :links="item.children"
          :ui="{
            label: 'text-sm relative',
            wrapper: 'dark:border-[#94A3B8]',
            base: 'group block border-s -ms-px leading-6 before:hidden focus-visible:rounded',
            padding: 'px-4 py-2',
            rounded: '',
            font: 'font-sans font-normal text-lg',
            ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-white',
            active: 'text-primary-500 bg-bcGovColor-lightBlue dark:text-[#7BB5EF] border-[#94A3B8] dark:border-[#7BB5EF] font-semibold',
            inactive: 'border-transparent hover:bg-bcGovColor-hairlinesOnWhite dark:hover:border-white  text-gray-700 hover:bg-bcGovBlue-50 hover:text-bcGovColor-activeBlue hover:font-semibold dark:text-gray-400 dark:hover:text-white',
            width: 'w-[208px]',
            height: 'h-[36px]',
            gap: 'gap-2.5',
            border: 'border-b-0 border-l-0 border-t-0 border-r',
            opacity: 'opacity-0'
          }"
        />
      </template>
    </UAccordion>
  </nav>
</template>
