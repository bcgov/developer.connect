import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('products page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en-CA/products')
  })

  test('page contents', async ({ page }) => {
    const h1 = await page.textContent('h1')
    expect(h1).toBe('All Products')
    await expect(page.getByTestId('product-card')).toHaveCount(7) // there should be 7 product cards
  })

  test('accessibility', async ({ page }) => {
    const a11yResults = await new AxeBuilder({ page })
      .exclude('#locale-select-dropdown') // headless ui dropdown fails the axe check
      .analyze()

    expect(a11yResults.violations).toEqual([])
  })
})
