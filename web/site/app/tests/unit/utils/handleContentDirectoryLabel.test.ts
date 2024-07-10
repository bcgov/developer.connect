import { describe, expect, it } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { handleContentDirectoryLabel } from '~/utils/handleContentDirectoryLabel'

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

const productNames = [
  ['MHR', 'Manufactured Home Registry'],
  ['PPR', 'Personal Property Registry'],
  ['BN', 'Business Number'],
  ['PAY', 'Pay'],
  ['RS', 'Registry Search'],
  ['BR', 'Business Registry'],
  ['NR', 'Names Request'],
  ['CONNECT', 'SBC Connect']
]

describe('handleContentDirectoryLabel', () => {
  it('returns translated string for "Get Started"', () => {
    expect(handleContentDirectoryLabel('Get Started')).toBe('Get Started')
  })

  it('returns translated string for "get-started"', () => {
    expect(handleContentDirectoryLabel('get-started')).toBe('Get Started')
  })

  it.each(productNames)('returns known product title', (x, expected) => {
    expect(handleContentDirectoryLabel(x)).toBe(expected)
  })

  it('returns arg string for unknown title', () => {
    expect(handleContentDirectoryLabel('unknown')).toBe('unknown')
  })
})
