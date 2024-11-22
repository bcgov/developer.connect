import type { NavItem } from '@nuxt/content'
import { handleContentDirectoryLabel } from './handleContentDirectoryLabel'

// maps nav items returned from fetchContentNavigation into usable array by UAccordian for navigation
export function createContentNav (navItems: NavItem[] | undefined) {
  if (!navItems) { return undefined }
  const localePath = useLocalePath()

  return navItems.flatMap((nav: NavItem) => {
    return nav.children?.filter((firstChild) => {
      return !['connect', 'bn'].includes(firstChild.title.toLowerCase()) // filter bn , connect temp
    }).map((firstChild) => {
      const isGetStarted = firstChild.title.toLowerCase() === 'get started' || firstChild.title.toLowerCase() === 'get-started'
      return { // create parent array for each UAccordian
        label: handleContentDirectoryLabel(firstChild.title), // return full string instead of 'bn', 'rs', etc
        defaultOpen: true, // accordians all open by default
        children: firstChild.children?.filter((secondChild) => {
          return !['connect', 'bn'].includes(secondChild.title.toLowerCase()) && (!isGetStarted || secondChild.title !== 'API Access Request') // Exclude 'connect' or 'bn' at second level
        }).map((secondChild) => { // create children array for each UVerticalNavigation
          return {
            label: secondChild.title,
            to: localePath(secondChild._path) // localize path
          }
        })
      }
    })
  }) as AccordianNavItem[]
}
