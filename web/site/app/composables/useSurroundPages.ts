import type { NavItem, ParsedContent } from '@nuxt/content'

// get data for next/previous page buttons
export async function useSurroundPages() {
  // inject navigation items for /products from app.vue
  const navItems = inject<Ref<NavItem[]>>('docNavItems')
  const routeWithoutLocale = useRouteWithoutLocale()
  const { locale } = useI18n()

  const { data: surround } = await useAsyncData<Array<Pick<ParsedContent, '_path' | 'title'> | null>>(
    () => `surround-${locale.value}-${routeWithoutLocale.value}`,
    async () => {
      if (!routeWithoutLocale.value.includes('products')) {
        return [null, null]
      }
      return (await queryContent()
        .only(['_path', 'title'])
        .where({ _locale: locale.value, _extension: { $eq: 'md' }, _path: { $contains: 'products' } })
        .findSurround(routeWithoutLocale.value)) as Array<Pick<ParsedContent, '_path' | 'title'> | null>
    },
    {
      watch: [locale, routeWithoutLocale]
    }
  )

  const lastNavItemIndex = computed(() => (navItems?.value?.[0]?.children?.length ?? 0) - 1)
  const lastNavChildIndex = computed(() => (navItems?.value?.[0]?.children?.[lastNavItemIndex.value]?.children?.length ?? 0) - 1)

  const prevPage = computed(() => {
    return surround.value?.[0] ?? navItems?.value?.[0]?.children?.[lastNavItemIndex.value]?.children?.[lastNavChildIndex.value] ?? { title: 'Not Found', _path: 'Not Found' }
  })

  const nextPage = computed(() => {
    return surround.value?.[1] ?? navItems?.value?.[0]?.children?.[0]?.children?.[0] ?? { title: 'Not Found', _path: 'Not Found' }
  })

  return { prevPage, nextPage }
}
