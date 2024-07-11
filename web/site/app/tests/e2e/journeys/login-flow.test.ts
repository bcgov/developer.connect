import { test } from '@playwright/test'

test.skip('test', async ({ page }) => {
  await page.goto('http://localhost:3467/en-CA')
  await page.getByRole('link', { name: 'Dashboard' }).click()
  const page1Promise = page.waitForEvent('popup')
  await page.getByRole('button', { name: 'Log in with BC Services Card' }).click()
  const page1 = await page1Promise
  await page1.getByLabel('Log in with Test with').click()
  await page1.getByLabel('Email or username').click()
  await page1.getByLabel('Email or username').press('CapsLock')
  await page1.getByLabel('Email or username').fill('') // username
  await page1.getByLabel('Password').click()
  await page1.getByLabel('Password').fill('') // password
  await page1.getByLabel('Password').press('Tab')
  await page1.getByRole('button', { name: 'Continue' }).click()
  await page.goto('http://localhost:3467/en-CA')
  await page.goto('http://localhost:3467/en-CA/sbc/dashboard')
})
