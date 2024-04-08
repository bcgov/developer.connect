import { describe, expect, it } from 'vitest'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent, screen } from '@testing-library/vue'
import { ColorModeSelect } from '#components'
import { enI18n } from '~/tests/mocks/i18n'

const $colorModeLight = {
  preference: 'light'
}

const $colorModeDark = {
  preference: 'dark'
}

describe('<ColorModeSelect/>', () => {
  it('mounts in light mode', async () => {
    const component = await mountSuspended(ColorModeSelect, {
      global: {
        mocks: {
          $colorMode: $colorModeLight
        },
        plugins: [enI18n]
      }
    })

    expect(component.attributes('aria-label')).to.equal('Switch to dark mode')
    expect(component.html()).to.contain('<span class="i-mdi-white-balance-sunny flex-shrink-0 h-5 w-5" aria-hidden="true"></span>')
  })

  it('mounts in dark mode', async () => {
    const component = await mountSuspended(ColorModeSelect, {
      global: {
        mocks: {
          $colorMode: $colorModeDark
        },
        plugins: [enI18n]
      }
    })

    expect(component.attributes('aria-label')).to.equal('Switch to light mode')
    expect(component.html()).to.contain('<span class="i-mdi-moon-waning-crescent flex-shrink-0 h-5 w-5" aria-hidden="true"></span>')
  })

  it('can change colormode preference', async () => {
    await renderSuspended(ColorModeSelect, {
      global: {
        mocks: {
          $colorMode: $colorModeLight
        },
        plugins: [enI18n]
      }
    })

    const button = screen.getByRole('button')

    await fireEvent.click(button)

    expect($colorModeLight.preference).to.equal('dark')

    await fireEvent.click(button)

    expect($colorModeLight.preference).to.equal('light')
  })
})
