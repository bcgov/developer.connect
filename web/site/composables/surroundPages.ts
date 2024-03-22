import type { NavItem, ParsedContent } from '@nuxt/content/dist/runtime/types'

export function useSurroundPages () {
  const navItems = inject<Ref<NavItem[]>>('docNavItems')

  const lastNavItemIndex = (navItems?.value[0].children?.length ?? 0) - 1
  const lastNavChildIndex = (navItems?.value[0]?.children?.[lastNavItemIndex]?.children?.length ?? 0) - 1

  const routeWithoutLocale = useRouteWithoutLocale()
  const route = useRoute()
  const { locale } = useI18n()

  const prevPage = ref<Pick<ParsedContent, '_path' | 'title'>>()
  const nextPage = ref<Pick<ParsedContent, '_path' | 'title'>>()

  const updateSurroundPages = async () => {
    const [prev, next] = await queryContent()
      .only(['_path', 'title'])
      .where({ _locale: locale.value, _extension: { $eq: 'md' }, _path: { $contains: 'products' } })
      .findSurround(routeWithoutLocale.value)
    prevPage.value = prev ?? navItems?.value[0].children?.[lastNavItemIndex]?.children?.[lastNavChildIndex] ?? { title: 'Not Found', _path: 'Not Found' }
    nextPage.value = next ?? navItems?.value[0].children?.[0]?.children?.[0] ?? { title: 'Not Found', _path: 'Not Found' }
  }

  // update whenever route.path or locale changes
  watch([locale, () => route.path], updateSurroundPages, { immediate: true })

  return { prevPage, nextPage }
}
