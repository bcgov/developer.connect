import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { handleAccordianLabel } from './handleAccordianLabel'

export function createContentNav (navItems: NavItem[] | undefined) {
  const localePath = useLocalePath()
  if (navItems !== undefined) {
    return navItems.flatMap((nav) => {
      return nav.children?.map((firstChild) => {
        return { // create parent array for each UAccordian
          label: handleAccordianLabel(firstChild.title), // return full string instead of 'bn', 'rs', etc
          defaultOpen: true, // accordians all open by default
          children: firstChild.children?.map((secondChild) => { // create children array for each UVerticalNavigation
            return {
              label: secondChild.title,
              to: localePath(secondChild._path) // localize path
            }
          })
        }
      })
    })
  } else {
    return []
  }
}
