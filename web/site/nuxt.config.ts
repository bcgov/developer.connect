// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  routeRules: {
    '/': { redirect: '/en-CA' }
  },

  css: [
    resolve('./app/assets/css/prose.css')
  ],

  modules: [
    '@nuxt/content'
  ],

  imports: {
    dirs: ['schemas']
  },

  extends: [
    '@developer.connect/nuxt-base'
  ],

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        iso: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      },
      {
        name: 'Français',
        code: 'fr-CA',
        iso: 'fr-CA',
        dir: 'ltr',
        file: 'fr-CA.ts'
      }
    ],
    langDir: 'locales'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light'
        }
      }
    }
  },

  typescript: {
    tsConfig: {
      exclude: [
        '../../../packages/layers/base/tests/**'
      ],
      compilerOptions: {
        skipLibCheck: true
      }
    }
  },

  runtimeConfig: {
    public: {
      version: `Dev Site v${process.env.npm_package_version || ''}`
    }
  }
})
