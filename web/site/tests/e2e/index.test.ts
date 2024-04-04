import { test, expect } from '@playwright/test'

test('Example test index', async ({ page }) => {
  // Navigate to your Nuxt 3 app's URL
  await page.goto('/')
  // await page.goto('/en-CA', { waitUntil: 'domcontentloaded' })

  // Perform actions and assertions using Playwright's API
  // await page.click("button");
  const h1 = await page.textContent('h1')
  const p = await page.textContent('p')

  // Use assertions from the 'expect' module to validate the test results
  expect(h1).toBe('BC Registries API Gateway')
  expect(p).toBe('Welcome to the BC Registries API Gateway! Access API information for all BC Registries services here.')
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