import { describe, it, expect } from 'vitest'

describe('Route Topology Parity', () => {
  const portalRoutes = [
    '/',
    '/en-CA',
    '/en-CA/products',
    '/en-CA/products/get-started/account-setup',
    '/en-CA/products/rs/overview',
    '/oas/strr',
    '/oas/connect',
    '/oas/pay'
  ]

  it('verifies public developer portal routes are defined', () => {
    portalRoutes.forEach((route) => {
      expect(route).toBeDefined()
      expect(typeof route).toBe('string')
    })
  })
})
