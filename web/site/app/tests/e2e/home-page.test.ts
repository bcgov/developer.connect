import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en-CA')
  })

  test('page contents', async ({ page }) => {
    const h1 = await page.textContent('h1')
    const p = await page.textContent('p')
    const logo = page.getByAltText('Government of British Columbia Logo')
    expect(logo).toBeTruthy()
    expect(h1).toBe('BC Registries API Gateway')
    expect(p).toBe('Welcome to the BC Registries API Gateway! Access API information for all BC Registries services here.')
  })

  test('accessibility', async ({ page }) => {
    const a11yResults = await new AxeBuilder({ page })
      .exclude('#locale-select-dropdown') // headless ui dropdown fails the axe check
      .analyze()

    expect(a11yResults.violations).toEqual([])
  })
})
