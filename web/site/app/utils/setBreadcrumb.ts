import type { BreadcrumbLink } from '#ui/types'
export function setBreadcrumbs (breadcrumbs: BreadcrumbLink[]) {
  const route = useRoute()
  route.meta.breadcrumbs = breadcrumbs
}
