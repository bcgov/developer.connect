export interface BreadcrumbLink {
  label: string
  to?: string
  href?: string
  external?: boolean
  disabled?: boolean
  icon?: string
}

export function setBreadcrumbs(breadcrumbs: BreadcrumbLink[]) {
  const route = useRoute()
  route.meta.breadcrumbs = breadcrumbs
}
