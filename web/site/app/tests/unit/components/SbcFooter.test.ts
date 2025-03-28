import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { SbcFooter } from '#components'
import { enI18n } from '~/tests/mocks/i18n'

describe('<SbcFooter/>', () => {
  it('renders footer links', async () => {
    const component = await mountSuspended(SbcFooter, {
      global: {
        plugins: [enI18n]
      }
    })

    const linkTexts = ['Home', 'Disclaimer', 'Release Notes', 'Privacy', 'Hours of Availability', 'Accessibility', 'Copyright']
    const linkHrefs = [
      '/en-CA',
      'https://www2.gov.bc.ca/gov/content/home/disclaimer',
      'https://www.release-notes.bcregistry.gov.bc.ca',
      'https://www2.gov.bc.ca/gov/content/home/privacy',
      'https://www2.gov.bc.ca/gov/content?id=C41D8179671441B2BAA3BDDD3D89C9A9',
      'https://www2.gov.bc.ca/gov/content/home/accessibility',
      'https://www2.gov.bc.ca/gov/content/home/copyright'
    ]

    const links = component.findAll('a')
    expect(links.length).toBe(linkTexts.length)

    links.forEach((link, index) => {
      expect(link.text()).toBe(linkTexts[index])
      expect(link.attributes('href')).toBe(linkHrefs[index])

      // all but home should be _blank
      if (index > 0) {
        expect(link.attributes('target')).toBe('_blank')
      }
    })
  })
})
