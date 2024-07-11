import { describe, it, expect, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { SbcDocsProductCard } from '#components'
import { enI18n } from '~/tests/mocks/i18n'

const { navigateToMock } = vi.hoisted(() => ({ navigateToMock: vi.fn() }))
mockNuxtImport('navigateTo', () => navigateToMock)

describe('SbcDocsProductCard', () => {
  const props = {
    name: 'Test Product',
    description: 'This is a test product',
    badge: 'New',
    bulletPoints: ['Feature 1', 'Feature 2'],
    directory: 'test-product'
  }

  it('renders', async () => {
    const wrapper = await mountSuspended(SbcDocsProductCard, {
      props,
      global: {
        plugins: [enI18n]
      }
    })

    expect(wrapper.find('[data-testid="product-card"]').exists()).toBe(true)
    expect(wrapper.text()).toContain(props.name)
    expect(wrapper.text()).toContain(props.description)
    expect(wrapper.text()).toContain(props.badge)
    expect(wrapper.text()).toContain(props.bulletPoints[0])
    expect(wrapper.text()).toContain(props.bulletPoints[1])
  })

  it('navigates when clicked', async () => {
    const wrapper = await mountSuspended(SbcDocsProductCard, {
      props,
      global: {
        plugins: [enI18n]
      }
    })

    await wrapper.trigger('click')
    expect(navigateTo).toHaveBeenCalledWith('/en-CA/products/test-product/overview')
  })
})
