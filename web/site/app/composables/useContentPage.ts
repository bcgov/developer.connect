// eslint-disable-next-line
export const useContentPage = (page?: Ref<any>) => {
  const route = useRoute()
  const routeBaseName = useRouteBaseName()
  const { t } = useI18n()
  const localePath = useLocalePath()
  const rtc = useRuntimeConfig()
  const { docsKey } = useContentKeys()

  const siteSuffix = ' | Service BC Connect Developer Site'

  const productSlug = computed(() => {
    if (route.params.product) return String(route.params.product).toLowerCase()
    const match = route.path.match(/\/products\/([^/]+)/i)
    return match?.[1]?.toLowerCase() ?? ''
  })

  const normalisedPath = computed(() =>
    route.path.replace(/^\/[a-z]{2}-[a-z]{2}\//i, '/')
  )

  const isGetStarted = computed(() => normalisedPath.value.startsWith('/get-started'))
  const isProducts = computed(() => normalisedPath.value.startsWith('/products'))
  const isAllProducts = computed(() => normalisedPath.value === '/products' || normalisedPath.value === '/products/')
  const isOas = computed(() => String(routeBaseName(route) || '').includes('oas'))

  const { data: productPage } = useAsyncData(
    () => `product-oas-${productSlug.value || 'none'}`,
    () => {
      if (!productSlug.value) return Promise.resolve(null)

      return queryCollection(docsKey.value)
        .where('extension', '=', 'md')
        .where('path', 'LIKE', `%/products/${productSlug.value}%`)
        .first()
    },
    { watch: [productSlug], enabled: () => isOas.value || isProducts.value }
  )

  const baseCrumbs = [
    { label: t('label.sbcConnect'), to: rtc.public.registryHomeUrl, external: true },
    { label: t('label.sbcConnectDevSite'), to: localePath('/') }
  ]

  const allProductsCrumb = {
    label: t('page.products.h1'),
    to: localePath('/products')
  }

  const productCrumb = computed<ConnectBreadcrumb | null>(() => {
    if (!productSlug.value) return null
    const cleanPath = productPage.value?.path?.replace(/^\/[a-z]{2}-[a-z]{2}\//i, '/')
    return {
      label: productPage.value?.description || t('label.productOverview'),
      to: cleanPath ? localePath(cleanPath) : localePath('/products')
    }
  })

  const breadcrumbs = computed<ConnectBreadcrumb[]>(() => {
    if (isOas.value) {
      const crumbs: ConnectBreadcrumb[] = [...baseCrumbs, allProductsCrumb]
      if (productCrumb.value) crumbs.push(productCrumb.value)
      crumbs.push({ label: 'OAS' })
      return crumbs
    }

    if (isAllProducts.value) {
      return [...baseCrumbs, { label: t('page.products.h1') }]
    }

    if (isProducts.value) {
      const crumbs: ConnectBreadcrumb[] = [...baseCrumbs, allProductsCrumb]
      if (productCrumb.value) {
        crumbs.push({ label: productCrumb.value.label })
      } else {
        crumbs.push({ label: page?.value?.description || t('label.productOverview') })
      }
      return crumbs
    }

    if (isGetStarted.value) {
      return [...baseCrumbs, { label: t('label.getStarted') }]
    }

    return baseCrumbs
  })

  watchEffect(() => setBreadcrumbs(breadcrumbs.value))

  const pageTitle = computed(() => {
    if (isOas.value) {
      const parentName = productPage.value?.description || productPage.value?.title || productSlug.value.toUpperCase()
      return `${parentName} - OAS`
    }

    if (isAllProducts.value) {
      return t('page.products.title')
    }

    if (isProducts.value) {
      return page?.value?.description || page?.value?.title || t('label.productOverview')
    }

    if (isGetStarted.value) {
      return t('label.getStarted')
    }

    return page?.value?.title || t('page.home.title')
  })

  useHead({
    title: () => `${pageTitle.value}${siteSuffix}`
  })

  return {
    page,
    breadcrumbs,
    pageTitle
  }
}
