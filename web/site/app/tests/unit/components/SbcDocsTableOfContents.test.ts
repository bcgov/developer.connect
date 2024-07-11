import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { SbcDocsTableOfContents } from '#components'

describe('TableOfContents', () => {
  const props = {
    tocLinks: [
      { id: 'section-1', text: 'Section 1', children: [], depth: 1 },
      { id: 'section-2', text: 'Section 2', children: [{ id: 'section-2-1', text: 'Section 2.1', depth: 2 }], depth: 1 }
    ],
    currentDir: '/docs',
    activeTocId: 'section-1',
    hideLabel: false
  }

  it('renders', async () => {
    const wrapper = await mountSuspended(SbcDocsTableOfContents, {
      props
    })

    expect(wrapper.find('nav[aria-label="table of contents"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Table of Contents')
    expect(wrapper.text()).toContain('Section 1')
    expect(wrapper.text()).toContain('Section 2')
    expect(wrapper.text()).toContain('Section 2.1')
  })

  it('highlights the active link', async () => {
    const wrapper = await mountSuspended(SbcDocsTableOfContents, {
      props
    })

    const activeLink = wrapper.find('.text-primary-500')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Section 1')
  })
})
