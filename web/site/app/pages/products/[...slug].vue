<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  layout: 'connect-auth'
})

watchEffect(() => {
  setBreadcrumbs([
    { label: t('sbcBreadcrumb.default'), to: 'https://bcregistry.gov.bc.ca', external: true },
    { label: t('sbcBreadcrumb.sbcHome'), to: localePath('/') },
    { label: t('sbcBreadcrumb.sbcProducts'), to: localePath('/products') }
  ])
})

const navItems = inject<Ref<NavItem[]>>('docNavItems')
const { prevPage, nextPage } = await useSurroundPages()
const { createPageHead } = useDocPageData()
const contentWrapper = shallowRef<HTMLDivElement | null>(null)

useHead({
  title: () => createPageHead()
})
</script>

<template>
  <div class="w-full grow bg-white dark:bg-gray-900">
    <div class="relative mx-auto flex w-full max-w-[1360px] grow gap-8 px-4 py-8 xl:px-8">
      <!-- Side Navigation pane matching baseline visual design -->
      <div class="sticky top-24 hidden h-fit overflow-x-hidden lg:block shrink-0">
        <DocsSideNavigation :nav-items="createContentNav(unref(navItems))" />
      </div>

      <!-- Main Content Area -->
      <div class="flex min-w-0 grow flex-col gap-8">
        <div ref="contentWrapper">
          <ContentDoc
            class="prose prose-bcGov dark:prose-invert min-w-full max-w-none"
            :query="{
              path: $route.path.replace(/^\/[a-zA-Z]{2}-[a-zA-Z]{2}\//, '/'),
              where: { _locale: $i18n.locale }
            } as any"
          >
            <template #not-found>
              <div class="flex h-full flex-col items-center justify-center space-y-4 py-12">
                <h1 class="text-2xl font-semibold">
                  {{ $t('page.notFound.h1') }}
                </h1>
                <div class="flex gap-4">
                  <UButton
                    :label="$t('btn.goBack')"
                    @click="$router.back()"
                  />
                  <UButton
                    :label="$t('btn.goHome')"
                    variant="outline"
                    :to="localePath('/')"
                  />
                </div>
              </div>
            </template>
          </ContentDoc>
        </div>

        <!-- Topic Surround Navigation matching baseline -->
        <div class="flex w-full flex-col items-center justify-between gap-4 pb-8 sm:flex-row">
          <DocsNextPrevButton
            :page="prevPage"
            direction="prev"
          />
          <div class="sm:ml-auto">
            <DocsNextPrevButton
              :page="nextPage"
              direction="next"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
