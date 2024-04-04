import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const devicesToTest = [
  'Desktop Chrome',
  // Test against other common browser engines.
  // 'Desktop Firefox',
  // 'Desktop Safari',
  // Test against mobile viewports.
  // 'Pixel 5',
  // 'iPhone 12',
  // Test against branded browsers.
  // { ...devices['Desktop Edge'], channel: 'msedge' },
  // { ...devices['Desktop Chrome'], channel: 'chrome' },
] satisfies Array<string | typeof devices[string]> 

export default defineConfig<ConfigOptions>({
  testDir: './tests/e2e',
  reporter: 'line',
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
    actionTimeout: 0,
    baseURL: 'http://localhost:3467',
    trace: 'on-first-retry',
    screenshot: 'off',
    // do not open browser
    headless: true
  },
  projects: devicesToTest.map(p => typeof p === 'string' ? ({ name: p, use: devices[p] }) : p),
  webServer: {
    // run dev server before starting tests
    command: 'pnpm dev --port 3467'
  }
})
