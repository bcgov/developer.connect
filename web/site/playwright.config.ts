// import { fileURLToPath } from 'node:url'
// import { defineConfig, devices } from '@playwright/test'
// import type { ConfigOptions } from '@nuxt/test-utils/playwright'

// const devicesToTest = [
//   'Desktop Chrome',
//   // Test against other common browser engines.
//   // 'Desktop Firefox',
//   // 'Desktop Safari',
//   // Test against mobile viewports.
//   // 'Pixel 5',
//   // 'iPhone 12',
//   // Test against branded browsers.
//   // { ...devices['Desktop Edge'], channel: 'msedge' },
//   // { ...devices['Desktop Chrome'], channel: 'chrome' },
// ] satisfies Array<string | typeof devices[string]> 

// /* See https://playwright.dev/docs/test-configuration.*/
// export default defineConfig<ConfigOptions>({
//   testDir: './tests/e2e',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     /* Nuxt configuration options */
//     nuxt: {
//       rootDir: fileURLToPath(new URL('.', import.meta.url)),
//       browser: true
//     },
//     baseURL: 'http://localhost:3467',
//     screenshot: 'off',
//     // if true then the browser will be launched in headless mode. Defaults to true unless the devtools option is true.
//     headless: false
//   },
//   projects: devicesToTest.map(p => typeof p === 'string' ? ({ name: p, use: devices[p] }) : p),
//   webServer: {
//     command: 'pnpm dev --port 3467'
//   }
// })

import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  testDir: './tests/e2e',
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
      // browser: true
    },
    actionTimeout: 0,
    baseURL: 'http://localhost:3467',
    trace: 'on-first-retry',
    screenshot: 'off',
    // if true then the browser will be launched in headless mode. Defaults to true unless the devtools option is true.
    headless: true
  },
  webServer: {
    command: 'pnpm dev --port 3467'
    // port: 3467,
  }
})
