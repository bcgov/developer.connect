// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  extends: ['@sbc-connect/nuxt-pay'],
  modules: [
    '@nuxt/content',
    'nuxt-gtag',
    '@scalar/nuxt'
  ],
  icon: {
    clientBundle: {
      icons: [
        'mdi:cursor-default-click',
        'mdi:text-box-search',
        'mdi:comment-text-outline'
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [],
      crawlLinks: true,
      failOnError: false,
      ignore: [
        '/product-fees',
        '/fr-CA',
        '/fr-CA/**'
      ]
    }
  },
  routeRules: {
    '/': { redirect: '/en-CA' },
    '/product-fees': { redirect: 'https://bcregistry.gov.bc.ca/product-fees' },
    '/fr-CA/**': { prerender: false },
    '/oas/**': { redirect: '/en-CA/oas/**' },
    '/en-CA/oas/**': { ssr: false, prerender: false }
  },
  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces', 'types', 'utils']
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://developer.connect.gov.bc.ca',
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        language: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      }
    ],
    strategy: 'prefix',
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  content: {
    locales: [
      'en-CA'
    ],
    contentHead: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    ignores: [
      'web-component',
      '/sbc/tos',
      '/products/bn',
      '/1.get-started/3.api-access-request.md'
    ]
  },
  scalar: {
    darkMode: false,
    theme: 'default',
    hideSearch: true,
    metaData: {
      title: 'API Documentation by Scalar | Service BC Connect Developer Site'
    },
    configurations: [
      {
        spec: {
          url: '/strr/platform.yaml'
        },
        pathRouting: {
          basePath: '/oas/strr'
        }
      },
      {
        spec: {
          url: '/connect/connect-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/connect'
        }
      },
      {
        spec: {
          url: '/br/business-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/br'
        }
      },
      {
        spec: {
          url: '/mhr/mhr-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/mhr'
        }
      },
      {
        spec: {
          url: '/pay/payment-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/pay'
        }
      },
      {
        spec: {
          url: '/ppr/ppr-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/ppr'
        }
      },
      {
        spec: {
          url: '/rs/regsearch-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/rs'
        }
      },
      {
        spec: {
          url: '/namex/namex-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/namex'
        }
      }
    ]
  },
  typescript: {
    includeWorkspace: false
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('bcros-')
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      registryHomeUrl: process.env.NUXT_PUBLIC_REGISTRY_HOME_URL || 'https://bcregistry.gov.bc.ca/',
      version: `Dev Site v${process.env.npm_package_version || '1.0.0'}`
    }
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-GKRC2V8PT4'
  }
})
