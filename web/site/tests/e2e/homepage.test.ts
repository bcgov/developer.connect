import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('homepage', async ({ page }) => {
  // Navigate to your Nuxt 3 app's URL
  await page.goto('/en-CA')
  // await page.goto('/en-CA', { waitUntil: 'domcontentloaded' })

  // Perform actions and assertions using Playwright's API
  // await page.click("button");
  const h1 = await page.textContent('h1')
  const p = await page.textContent('p')
  // const logo = page.getByRole('img')
  const logo = page.getByAltText('Government of British Columbia Logo')
  expect(logo).toBeTruthy()
  expect(h1).toBe('BC Registries API Gateway')
  expect(p).toBe('Welcome to the BC Registries API Gateway! Access API information for all BC Registries services here.')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
    console.log('ally results: ', accessibilityScanResults.violations)
    expect(accessibilityScanResults.violations).toEqual([])
})

// import { fileURLToPath } from 'node:url'
// import { createPage, setup } from '@nuxt/test-utils/e2e'
// import { describe, expect, it } from 'vitest'

// await setup({
//   // rootDir: fileURLToPath(new URL('../../', import.meta.url)),
//   rootDir: '../../',
//   browser: true,
// })

// describe('browser', () => {
//   it('runs a test', async () => {
//     const page = await createPage('/en-CA')
//     const text = await page.getByRole('heading', { name: 'Welcome to Nuxt!' }).innerText()
//     expect(text).toContain('Welcome to Nuxt!')
//     await page.close()
//   })
// })

// this is kinda working
// import { expect, test } from '@nuxt/test-utils/playwright'

// test('test', async ({ page, goto }) => {
//   await goto('/', { waitUntil: 'hydration' })
//   await expect(page.getByRole('heading')).toHaveText('Welcome to Playwright!')
// })