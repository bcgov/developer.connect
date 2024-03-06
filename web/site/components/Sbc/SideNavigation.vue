<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(
    queryContent()
      .where({ _locale: locale.value, _extension: { $eq: 'md' } })
      .sort({ _dir: 1 })
  ), {
    watch: [locale]
  })

// console.log(navigation.value)

function handleAccordianLabel (title: string) {
  if (title === 'Get Started') {
    return t('btn.getStarted')
  } else {
    const key = title.toUpperCase() as keyof typeof ProductNames
    return ProductNames[key]
  }
}

const computedItems = computed(() => {
  return navigation.value?.map((item) => {
    return {
      label: handleAccordianLabel(item.title),
      defaultOpen: true,
      children: item.children?.map((child) => {
        return {
          label: child.title,
          to: localePath(child._path)
        }
      })
    }
  })
})
</script>
<template>
  <div class="min-w-fit flex-1 overflow-y-auto border-r border-bcGovGray-500 bg-bcGovColor-gray1 px-2 py-4 dark:bg-bcGovGray-900">
    <aside>
      <nav>
        <div class="flex flex-col">
          <UAccordion
            :items="computedItems"
            multiple
          >
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
            <template #item="{ item }">
              <UVerticalNavigation
                class="mx-2"
                :links="item.children"
              />
            </template>
          </UAccordion>
        </div>
      </nav>
    </aside>
  </div>
</template>
