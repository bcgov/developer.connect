interface ProductSpecConfig {
  title: string
  specPath: string
}

const PRODUCT_SPECS: Record<string, ProductSpecConfig> = {
  strr: {
    title: 'Short-Term Rental Registry',
    specPath: '/strr/platform.yaml'
  },
  connect: {
    title: 'Connect API',
    specPath: '/connect/connect-spec.yaml'
  },
  br: {
    title: 'Business Registry',
    specPath: '/br/business-spec.yaml'
  },
  mhr: {
    title: 'Manufactured Home Registry',
    specPath: '/mhr/mhr-spec.yaml'
  },
  pay: {
    title: 'Payment Services',
    specPath: '/pay/payment-spec.yaml'
  },
  ppr: {
    title: 'Personal Property Registry',
    specPath: '/ppr/ppr-spec.yaml'
  },
  rs: {
    title: 'Registry Search',
    specPath: '/rs/regsearch-spec.yaml'
  },
  namex: {
    title: 'Name Examination',
    specPath: '/namex/namex-spec.yaml'
  }
}

export const useScalarConfig = () => {
  const route = useRoute()

  const productKey = computed(() => String(route.params.product).toLowerCase())
  const productSpec = computed(() => PRODUCT_SPECS[productKey.value])

  const specUrl = computed(() => {
    if (!productSpec.value) return ''
    const baseUrl = import.meta.env.DEV ? 'http://localhost:3000' : ''
    return `${baseUrl}${productSpec.value.specPath}`
  })

  const config = computed(() => ({
    url: specUrl.value,
    theme: 'default' as const,
    showSidebar: true,
    hideSearch: true,
    darkMode: false,
    metaData: {
      title: productSpec.value
        ? `${productSpec.value.title} | Service BC Connect Developer Site`
        : 'API Documentation by Scalar | Service BC Connect Developer Site'
    }
  }))

  return {
    productKey,
    productSpec,
    config
  }
}
