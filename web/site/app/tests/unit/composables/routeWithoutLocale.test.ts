import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { useRouteWithoutLocale } from '~/composables/routeWithoutLocale'

const mockRoute = vi.hoisted(() => ({ path: '' }))

mockNuxtImport('useRoute', () => {
  return () => mockRoute
})

describe('useRouteWithoutLocale', () => {
  beforeEach(() => {
    mockRoute.path = '/en-CA/route-without-locale'
  })

  it('removes locale prefix from route', () => {
    const routeWithoutLocale = useRouteWithoutLocale()
    expect(routeWithoutLocale.value).toEqual('/route-without-locale')
  })

  it('returns a ref', () => {
    const routeWithoutLocale = useRouteWithoutLocale()
    expect(isRef(routeWithoutLocale)).toBe(true)
  })

  it('removes trailing slash from route', () => {
    mockRoute.path = '/en-CA/products/connect/overview/'
    const routeWithoutLocale = useRouteWithoutLocale()
    expect(routeWithoutLocale.value).toEqual('/products/connect/overview')
  })

  it('keeps the root path when only the locale is present', () => {
    mockRoute.path = '/en-CA/'
    const routeWithoutLocale = useRouteWithoutLocale()
    expect(routeWithoutLocale.value).toEqual('/')
  })
})
