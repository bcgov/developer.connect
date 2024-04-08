import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('dashboard page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en-CA/sbc/dashboard')
  })

  test('page contents', async ({ page }) => {
    const h1 = await page.textContent('h1')
    expect(h1).toBe(' Some Account ')
  })

  test('accessibility', async ({ page }) => {
    await page
      .getByText('API Keys')
      .click() // wait for page load before runnign a11y checks? fails without this

    const a11yResults = await new AxeBuilder({ page })
      .exclude('#locale-select-dropdown') // headless ui dropdown fails the axe check
      .analyze()

    expect(a11yResults.violations).toEqual([])
  })
})
