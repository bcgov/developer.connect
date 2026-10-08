import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/smoke',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3467',
    headless: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'npx nuxi dev --port 3467',
    port: 3467,
    reuseExistingServer: true,
    timeout: 60000
  }
})
