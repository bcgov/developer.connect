// https://nuxt.com/docs/api/configuration/nuxt-config
import type { BreadcrumbLink } from '#ui/types'
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  future: {
    compatibilityVersion: 4
  },
  nitro: {
    routeRules: {
      '/en-CA/sbc/**': { redirect: '/en-CA' }
    },
    prerender: {
      routes: [],
      ignore: [
        '/en-CA/sbc/dashboard',
        '/en-CA/sbc/tos',
        '/en-CA/sbc/auth/login',
        '/en-CA/sbc/auth/logout',
        '/en-CA/products/get-started/api-access-request'
      ]
    }
  },
  routeRules: {
    '/': { redirect: '/en-CA' },
    '/en-CA/oas/**': { prerender: false }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'nuxt-gtag',
    '@scalar/nuxt'
  ], // 'nuxt-vuefire'
  extends: ['@daxiom/sbc-nuxt-assets-layer'],
  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces', 'types', 'utils']
  },
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        iso: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      }
      // {
      //   name: 'Français',
      //   code: 'fr-CA',
      //   iso: 'fr-CA',
      //   dir: 'ltr',
      //   file: 'fr-CA.ts'
      // }
    ],
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  content: {
    locales: [
      'en-CA'
      // 'fr-CA'
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
      'products/connect',
      '/1.get-started/3.api-access-request.md'
    ]
  },
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  scalar: {
    darkMode: false,
    theme: 'default',
    hideSearch: true,
    metaData: {
      title: 'API Documentation by Scalar | Service BC Connect Developer Site'
    },
    proxyUrl: 'https://proxy.scalar.com',
    configurations: [
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/strr/platform.yaml'
        },
        pathRouting: {
          basePath: '/oas/strr'
        }
      },
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/br/business-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/br'
        }
      },
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/mhr/mhr-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/mhr'
        }
      },
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/pay/payment-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/pay'
        }
      },
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/ppr/ppr-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/ppr'
        }
      },
      {
        spec: {
          url: 'https://raw.githubusercontent.com/bcgov/developer.connect/refs/heads/main/web/site/public/rs/regsearch-spec.yaml'
        },
        pathRouting: {
          basePath: '/oas/rs'
        }
      }
      // {
      //   spec: {
      //     url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.json'
      //   },
      //   pathRouting: {
      //     basePath: '/scalar'
      //   }
      // }
    ]
  },
  // vuefire: {
  //   emulators: {
  //     // uncomment this line to run the application in production mode without emulators during dev
  //     enabled: false,
  //     auth: {
  //       options: {
  //         disableWarnings: true
  //       }
  //     }
  //   },
  // auth: {
  //   enabled: true,
  //   sessionCookie: false
  // },

  // appCheck: {
  //   provider: 'ReCaptchaV3',
  //   // site key, NOT secret key
  //   key: process.env.AUTH_APP_CHECK_KEY,
  //   isTokenAutoRefreshEnabled: true
  // },
  //   config: {
  //     apiKey: process.env.AUTH_API_KEY,
  //     authDomain: process.env.AUTH_DOMAIN,
  //     projectId: process.env.AUTH_PROJECT_ID,
  //     storageBucket: process.env.AUTH_STORAGE_BUCKET,
  //     messagingSenderId: process.env.AUTH_MESSAGING_SENDER_ID,
  //     appId: process.env.AUTH_APP_ID,
  //     measurementId: process.env.MEASUREMENT_ID
  //   }
  // },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: tag => tag.startsWith('bcros-')
        }
      }
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  runtimeConfig: {
    xApiKey: '',
    accountID: '',
    public: {
      version: `Dev Site v${process.env.npm_package_version || ''}`
    }
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-GKRC2V8PT4'
  }
})
declare module '#app' {
  interface PageMeta {
    breadcrumbs?: BreadcrumbLink[]
  }
}
