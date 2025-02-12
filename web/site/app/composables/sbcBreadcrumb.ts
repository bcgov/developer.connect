import type { BreadcrumbLink } from '#ui/types'

export function useBreadcrumbs () {
  const { t } = useI18n()
  const route = useRoute()
  const localePath = useLocalePath()

  const breadcrumbs = computed(() => {
    const bc: BreadcrumbLink[] = [
      { label: t('sbcBreadcrumb.default'), to: 'https://bcregistry.gov.bc.ca', external: true }
    ]
    bc.push({ label: t('sbcBreadcrumb.sbcHome'), to: '/' })
    // Check for /products
    if (route.path.includes('/products') && !route.path.includes('/get-started')) {
      bc.push({ label: t('sbcBreadcrumb.sbcProductslist'), to: localePath('/products') })
    }
    // Check for /products/get-started and include sub-paths like /account-setup
    if (route.path.includes('/products/get-started')) {
      bc.push({ label: t('sbcBreadcrumb.sbcProducts'), to: localePath('/products/get-started') })
    }

    return bc
  })
  return breadcrumbs
}
