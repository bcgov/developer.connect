import { test, expect } from '@playwright/test'

test.describe('E2E Browser Mount and Parity Verification', () => {
  test('Home page (/en-CA) renders with header, cards, and footer', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))

    const response = await page.goto('/en-CA', { waitUntil: 'domcontentloaded' })
    expect(response?.status()).toBeLessThan(400)

    // Verify #nuxt-loader is gone
    await expect(page.locator('#nuxt-loader')).toHaveCount(0)

    // Verify Title
    await expect(page).toHaveTitle(/Service BC Connect/)

    // Verify Navigation Cards
    const cards = page.locator('.relative.cursor-pointer')
    await expect(cards).toHaveCount(3)

    // Verify Header, Breadcrumb, and Footer
    await expect(page.locator('#connect-header-wrapper')).toBeVisible()
    await expect(page.locator('[data-testid="connect-breadcrumb-wrapper"]')).toBeVisible()
    await expect(page.locator('#connect-main-footer')).toBeVisible()

    await page.screenshot({ path: '/Users/thor/.gemini/antigravity-cli/brain/20084677-8fbf-4029-a6d5-1b89221921c2/home_current.png', fullPage: true })

    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0)
  })

  test('All Products page (/en-CA/products) dynamically loads product cards via Nuxt Content', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))

    await page.setViewportSize({ width: 1440, height: 900 })
    const response = await page.goto('/en-CA/products', { waitUntil: 'domcontentloaded' })
    expect(response?.status()).toBeLessThan(400)

    // Verify Header, Breadcrumb, and Footer
    await expect(page.locator('#connect-header-wrapper')).toBeVisible()
    await expect(page.locator('[data-testid="connect-breadcrumb-wrapper"]')).toBeVisible()
    await expect(page.locator('#connect-main-footer')).toBeVisible()

    // Verify page heading
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()

    // Verify dynamic product cards rendered
    const productCards = page.locator('[data-testid="product-card"]')
    await expect(productCards.first()).toBeVisible({ timeout: 10000 })
    expect(await productCards.count()).toBe(8)

    await page.screenshot({ path: '/Users/thor/.gemini/antigravity-cli/brain/20084677-8fbf-4029-a6d5-1b89221921c2/products_current.png', fullPage: true })

    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0)
  })

  test('Documentation page (/en-CA/products/get-started/account-setup) mounts UContentNavigation and ContentDoc', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))

    await page.setViewportSize({ width: 1440, height: 900 })
    page.on('console', msg => console.log('PAGE LOG:', msg.text()))
    const response = await page.goto('/en-CA/products/get-started/account-setup', { waitUntil: 'networkidle' })
    expect(response?.status()).toBeLessThan(400)

    // Verify Header, Breadcrumb, and Footer from connect-auth layer layout
    await expect(page.locator('#connect-header-wrapper')).toBeVisible()
    await expect(page.locator('[data-testid="connect-breadcrumb-wrapper"]')).toBeVisible()
    await expect(page.locator('#connect-main-footer')).toBeVisible()

    // Verify navigation pane renders
    const nav = page.locator('aside')
    await expect(nav.first()).toBeVisible({ timeout: 10000 })

    // Verify Next Topic button renders
    const nextBtn = page.locator('button:has-text("Next Topic"), a:has-text("Next Topic")')
    await expect(nextBtn.first()).toBeVisible({ timeout: 10000 })

    await page.screenshot({ path: '/Users/thor/.gemini/antigravity-cli/brain/20084677-8fbf-4029-a6d5-1b89221921c2/docs_account_setup_current.png', fullPage: true })

    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0)
  })

  test('Registry Search product doc page (/en-CA/products/rs/overview) renders', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', err => errors.push(err.message))
    page.on('console', msg => console.log('PAGE LOG:', msg.text()))

    await page.setViewportSize({ width: 1440, height: 900 })
    const response = await page.goto('/en-CA/products/rs/overview', { waitUntil: 'networkidle' })
    expect(response?.status()).toBeLessThan(400)

    // Verify Download the Specification button renders
    const downloadBtn = page.locator('button:has-text("Download the Specification"), a:has-text("Download the Specification")')
    await expect(downloadBtn.first()).toBeVisible({ timeout: 10000 })

    // Verify table with navy header renders
    const tableHeader = page.locator('th:has-text("Date")')
    await expect(tableHeader.first()).toBeVisible({ timeout: 10000 })

    // Verify horizontal dividers render
    const hrs = page.locator('hr')
    await expect(hrs.first()).toBeVisible({ timeout: 10000 })

    // Verify Next/Previous topic navigation
    const topicNav = page.locator('button:has-text("Topic"), a:has-text("Topic")')
    await expect(topicNav.first()).toBeVisible({ timeout: 10000 })

    await page.screenshot({ path: '/Users/thor/.gemini/antigravity-cli/brain/20084677-8fbf-4029-a6d5-1b89221921c2/rs_overview_current.png', fullPage: true })
  })

  test('Scalar OpenAPI documentation route (/oas/strr) redirects and loads', async ({ page }) => {
    const response = await page.goto('/oas/strr', { waitUntil: 'domcontentloaded' })
    expect(response?.status()).toBeLessThan(400)
    expect(page.url()).toContain('/en-CA/oas/strr')
  })
})
