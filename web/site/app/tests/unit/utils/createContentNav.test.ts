import { describe, expect, it } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { createContentNav } from '~/utils/createContentNav'

function mockUseLocalePath (path: string) {
  return '/en-CA' + path
}

function mockGetStartedString (key: string) {
  if (key === 'btn.getStarted') {
    return 'Get Started'
  }
}

mockNuxtImport('useI18n', () => {
  return () => (
    {
      t: mockGetStartedString
    }
  )
})

mockNuxtImport('useLocalePath', () => {
  return () => mockUseLocalePath
})

const initialNavItems = [
  {
    title: 'Products',
    _path: '/products',
    children: [
      {
        title: 'Get Started',
        _path: '/products/get-started',
        children: [
          { title: 'Account Setup', _path: '/products/get-started/account-setup' },
          { title: 'APIs Summary', _path: '/products/get-started/apis-summary' },
          { title: 'API Access Request', _path: '/products/get-started/api-access-request' },
          { title: 'Analytics Reports', _path: '/products/get-started/analytics-report' },
          { title: 'Message Logging', _path: '/products/get-started/message-logging' },
          { title: 'About', _path: '/products/get-started/about' }
        ]
      },
      {
        title: 'Br',
        _path: '/products/br',
        children: [
          { title: 'Overview', _path: '/products/br/overview' },
          { title: 'Api', _path: '/products/br/api' },
          { title: 'Examples', _path: '/products/br/examples' },
          { title: 'Contact', _path: '/products/br/contact' }
        ]
      }
    ]
  }
]

const formattedNavItems = [
  {
    children: [
      { label: 'Account Setup', to: '/en-CA/products/get-started/account-setup' },
      { label: 'APIs Summary', to: '/en-CA/products/get-started/apis-summary' },
      { label: 'API Access Request', to: '/en-CA/products/get-started/api-access-request' },
      { label: 'Analytics Reports', to: '/en-CA/products/get-started/analytics-report' },
      { label: 'Message Logging', to: '/en-CA/products/get-started/message-logging' },
      { label: 'About', to: '/en-CA/products/get-started/about' }
    ],
    defaultOpen: true,
    label: 'Get Started'
  }, {
    children: [
      { label: 'Overview', to: '/en-CA/products/br/overview' },
      { label: 'Api', to: '/en-CA/products/br/api' },
      { label: 'Examples', to: '/en-CA/products/br/examples' },
      { label: 'Contact', to: '/en-CA/products/br/contact' }
    ],
    defaultOpen: true,
    label: 'Business Registry'
  }
]

describe('createContentNav', () => {
  it('maps initialNavItems into formattedNavItems', () => {
    expect(createContentNav(initialNavItems)).toEqual(formattedNavItems)
  })
})
