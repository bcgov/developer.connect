import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { useDocPageData } from '#imports'

mockNuxtImport('useI18n', () => {
  return () => {
    return { locale: ref('en') }
  }
})

mockNuxtImport('useRoute', () => {
  return () => (
    {
      path: '/en-CA/products',
      meta: {
        layout: 'docs'
      }
    }
  )
})

const queryContentMockData = {
  _path: '/products/test',
  _dir: 'get-started',
  title: 'Test Title',
  body: { toc: { links: [{ id: '1', text: 'Introduction', href: '#introduction' }] } }
}

const { queryContentMock } = vi.hoisted(() => ({
  queryContentMock: vi.fn(() => ({
    where: vi.fn().mockReturnThis(),
    findOne: vi.fn(() => Promise.resolve(queryContentMockData))
  }))
}))
mockNuxtImport('queryContent', () => queryContentMock)

describe('useDocPageData', () => {
  let composable: ReturnType<typeof useDocPageData>

  beforeEach(async () => {
    composable = useDocPageData()
    // wait for promises to resolve
    await new Promise(resolve => setTimeout(resolve, 0))
  })
  it('should return correct values based off route', () => {
    // assert doc page data
    expect(composable.docPageData.value).toEqual(queryContentMockData)
    // assert toc links
    expect(composable.tocLinks.value).toEqual(queryContentMockData.body.toc.links)
    // assert current dir
    expect(composable.currentDir.value).toEqual(queryContentMockData._path)
    // assert generated page head
    expect(composable.createPageHead()).toBe('Get Started - Test Title - Service BC Connect API Gateway')
  })

  // TODO: figure out how to test the watcher reacting to route changes
  it.skip('should handle route changes', async () => {
    const { docPageData, currentDir, tocLinks, createPageHead } = useDocPageData()
    // wait for promises to resolve
    await new Promise(resolve => setTimeout(resolve, 0))

    // assert doc page data
    expect(docPageData.value).toEqual(queryContentMockData)
    // assert toc links
    expect(tocLinks.value).toEqual(queryContentMockData.body.toc.links)
    // assert current dir
    expect(currentDir.value).toEqual(queryContentMockData._path)
    // assert generated page head
    expect(createPageHead()).toBe('Get Started - Test Title')
  })
})
