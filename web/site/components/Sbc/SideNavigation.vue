<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

// fetch content files using composable from nuxt-content https://content.nuxt.com/composables/fetch-content-navigation
const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(
    queryContent() // pass custom query to fetchContentNavigation
      .where({ _locale: locale.value, _extension: { $eq: 'md' } }) // only return md files that match current locale
      .sort({ _dir: 1 }) // sort alphabetically
  ), {
    watch: [locale] // fetch new values whenever the locale changes
  })

// console.log(navigation.value)

function handleAccordianLabel (title: string) {
  if (title === 'Get Started') { // required to return correct fr translation for 'Get Started' accordian title
    return t('btn.getStarted')
  } else {
    const key = title.toUpperCase() as keyof typeof ProductNames
    return ProductNames[key] // return full string from enum, eg: content file 'bn' returns 'Business Number'
  }
}

// build usable objects for UAccordian and UVerticalNavigation
// will update whenever locale changes
const computedItems = computed(() => {
  return navigation.value?.map((item) => {
    return { // create parent array for each UAccordian
      label: handleAccordianLabel(item.title), // return full string instead of 'bn', 'rs', etc
      defaultOpen: true, // accordians all open by default
      children: item.children?.map((child) => { // create children array for each UVerticalNavigation
        return {
          label: child.title,
          to: localePath(child._path) // localize path
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
          <!-- creates an accordian for each object in computed items -->
          <UAccordion
            :items="computedItems"
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
      </nav>
    </aside>
  </div>
</template>
