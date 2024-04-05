import { describe, expect, it } from 'vitest'
import { renderSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import { fireEvent, screen } from '@testing-library/vue'
import { LocaleSelect } from '#components'
import { enI18n } from '~/tests/mocks/i18n'
// import en from '~/locales/en-CA'

mockNuxtImport('useI18n', () => {
  return () => (
    {
      locale: 'en-CA',
      locales: ref([
        {
          name: 'English',
          code: 'en-CA',
          iso: 'en-CA',
          dir: 'ltr',
          file: 'en-CA.ts'
        }
      ]),
      t: (key: string) => key // this seems to work but leaving the following just in case
      // t: (key: string) => {
      //   // @ts-ignore ignore 'cannot index en by string'
      //   return en[key]
      // }
    }
  )
})

describe('<LocaleSelect/>', () => {
  it('mounts', async () => {
    const component = await renderSuspended(LocaleSelect, {
      global: {
        plugins: [enI18n]
      }
    })

    expect(component).toBeTruthy()
  })

  it('can open the dropdown', async () => {
    const component = await renderSuspended(LocaleSelect, {
      global: {
        plugins: [enI18n]
      }
    })

    // menuitem hidden by default
    const menuitemStart = component.queryByRole('menuitem')
    expect(menuitemStart).toEqual(null)

    // click buttton to open menu
    const button = screen.getByLabelText('Select a Language, current language: English')
    await fireEvent.click(button)

    // menutiem should now be in the dom
    const menuitemEnd = screen.getByRole('menuitem')
    expect(menuitemEnd).toBeTruthy()
  })
})
