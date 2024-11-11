import { test, expect } from '@playwright/test'


test.describe('This page contains tests related to my account page', () => {

    test.beforeEach(async ({ page }) => {
        // Open the url of the account
        await page.goto('/my-account')
    })

    test('Verify that page title contains my account', async ({ page }) => {
        // Verify assertions
        await expect(page).toHaveTitle(/account/)
    })
})