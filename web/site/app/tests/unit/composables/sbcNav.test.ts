import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { useSbcNav } from '#imports'

const localePathMock = vi.fn(path => `/en-CA${path}`)
mockNuxtImport('useLocalePath', () => {
  return () => localePathMock
})

mockNuxtImport('useI18n', () => {
  return () => {
    return {
      locale: ref('en'),
      t: (key: any) => key
    }
  }
})

const routeRef = ref({ path: '/en-CA/products' })
mockNuxtImport('useRoute', () => {
  return () => routeRef.value
})

mockNuxtImport('useRouter', () => {
  return () => ({
    isReady: vi.fn(() => Promise.resolve())
  })
})

describe('useSbcNav', () => {
  let composable: ReturnType<typeof useSbcNav>

  beforeEach(() => {
    vi.clearAllMocks()
    composable = useSbcNav()
  })

  it('should return main links', () => {
    const { mainLinks } = composable

    expect(mainLinks.value).toEqual([
      {
        icon: 'i-mdi-home',
        label: 'btn.sbcConnect',
        to: '/en-CA/'
      }
      // {
      //   icon: 'i-mdi-database',
      //   label: 'btn.products',
      //   to: '/en-CA/products'
      // },
      // {
      //   icon: 'i-mdi-book-open-variant',
      //   label: 'Docs',
      //   to: '/en-CA/products/get-started/account-setup'
      // }
    ])
  })

  it('should return loggedInUserOptions', () => {
    const { loggedInUserOptions } = composable

    expect(loggedInUserOptions.value).toEqual([
      [
        {
          label: 'Account',
          slot: 'account',
          disabled: true
        },
        {
          label: 'Log out',
          icon: 'i-mdi-logout',
          click: expect.any(Function)
        }
      ]
    ])
  })

  it('should return loggedOutUserOptions', () => {
    const { loggedOutUserOptions } = composable

    expect(loggedOutUserOptions.value).toEqual([
      [
        {
          label: 'Log in',
          to: '/en-CA/sbc/auth/login',
          icon: 'i-mdi-login'
        },
        {
          label: 'Create Account',
          icon: 'i-mdi-account-plus'
        }
      ]
    ])
  })

  it('should open mobile nav', () => {
    const { openMobileNav, mobileNavRef } = composable
    expect(mobileNavRef.value).toBe(false)
    openMobileNav()
    expect(mobileNavRef.value).toBe(true)
  })

  it('should close mobile nav', async () => {
    const { closeMobileNav, mobileNavRef } = composable

    mobileNavRef.value = true
    await closeMobileNav()
    expect(mobileNavRef.value).toBe(false)
  })

  // TODO: figure out how to test the watcher reacting to route changes
  it.skip('should close mobile nav on route change', async () => {
    const { mobileNavRef } = composable
    mobileNavRef.value = true
    expect(mobileNavRef.value).toBe(true)
    routeRef.value = { path: '/en-CA/new-path' }
    await nextTick()

    expect(mobileNavRef.value).toBe(false)
  })
})
