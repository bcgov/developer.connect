import { findPageChildren } from '@nuxt/content/utils'
import type { ContentNavigationItem } from '@nuxt/content'

export const useContentNavigation = () => {
  const { locale } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()
  const { docsKey } = useContentKeys()

  const { data: fullNav } = useAsyncData<ContentNavigationItem[]>(`nav-${locale.value}`, () =>
    queryCollectionNavigation(docsKey.value)
  )

  const fixPathLocale = (path: string) => localePath(path.replace(/^\/[a-z]{2}-[a-z]{2}\//i, '/'))

  const flattenAndRename = (items: ContentNavigationItem[]): ContentNavigationItem[] => {
    return items.map((item) => {
      const fixedItem: ContentNavigationItem = {
        ...item,
        path: fixPathLocale(item.path)
      }

      if (fixedItem.children && fixedItem.children.length === 1 && fixedItem.children[0]) {
        const flattenedChild = flattenAndRename([fixedItem.children[0]])[0]
        if (flattenedChild) {
          return {
            ...flattenedChild,
            title: fixedItem.title
          }
        }
      }

      if (fixedItem.children && fixedItem.children.length > 0) {
        return {
          ...fixedItem,
          children: flattenAndRename(fixedItem.children)
        }
      }

      return fixedItem
    })
  }

  const navigationTree = computed(() => {
    if (!fullNav.value) return []
    const children = findPageChildren(fullNav.value, `/${locale.value.toLowerCase()}`)
    return flattenAndRename(children)
  })

  const linearList = computed<Array<{ to: string, label: string }>>(() => {
    const flatten = (items: ContentNavigationItem[]) => {
      return items.reduce<Array<{ to: string, label: string }>>((acc, item) => {
        if (item.path && item.page !== false) {
          acc.push({ label: item.title, to: item.path, ...item })
        }
        if (item.children) acc.push(...flatten(item.children))
        return acc
      }, [])
    }
    return flatten(navigationTree.value)
  })

  const currentIndex = computed<number>(() => {
    const list = linearList.value
    const currentPath = route.path.replace(/\/$/, '').toLowerCase()
    return list.findIndex(i => i.to.replace(/\/$/, '').toLowerCase() === currentPath)
  })

  const prevItem = computed(() => {
    const list = linearList.value
    if (!list.length || currentIndex.value === -1) return undefined
    return list[(currentIndex.value - 1 + list.length) % list.length]
  })

  const nextItem = computed(() => {
    const list = linearList.value
    if (!list.length || currentIndex.value === -1) return undefined
    return list[(currentIndex.value + 1) % list.length]
  })

  return {
    navigationTree,
    prevItem,
    nextItem
  }
}
