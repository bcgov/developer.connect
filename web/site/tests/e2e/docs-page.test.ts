import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('docs page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en-CA/products/get-started')
  })

  test('page contents', async ({ page }) => {
    const h1 = await page.textContent('h1')
    expect(h1).toBe('Account Setup')
  })

  test('accessibility', async ({ page }) => {
    await page
      .getByText('Account Setup')
      .first()
      .click() // wait for page load before runnign a11y checks? fails without this

    const a11yResults = await new AxeBuilder({ page })
      .exclude('#locale-select-dropdown') // headless ui dropdown fails the axe check
      .analyze()

    expect(a11yResults.violations).toEqual([])
  })
})
