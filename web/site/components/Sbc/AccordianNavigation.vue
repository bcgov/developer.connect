<script setup lang="ts">
type AccordianNav = {
  label: string,
  defaultOpen: boolean,
  children: Array<{label: string, to: string}>
}
defineProps<{
  navItems: AccordianNav | undefined
}>()
</script>
<template>
  <div class="flex flex-col">
    <!-- creates an accordian for each object in computed items -->
    <UAccordion
      :items="navItems"
      multiple
    >
      <!-- default slot is the accordian button itself, so we use a custom button variant here to match theme -->
      <template #default="{ item, open }">
        <UButton
          variant="accordian_trigger"
        >
          <span class="truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon
              name="i-mdi-menu-up"
              class="ms-auto size-7 transition-transform duration-200"
              :class="[!open && 'rotate-180']"
            />
          </template>
        </UButton>
      </template>
      <!-- item slot is the content inside each accordian, so for each accordian item, pass the children array into UVerticalNavigation -->
      <template #item="{ item }">
        <UVerticalNavigation
          class="mx-2"
          :links="item.children"
        />
      </template>
    </UAccordion>
  </div>
</template>
