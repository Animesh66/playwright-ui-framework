import { test, expect } from '@playwright/test'


test.describe('This file contains tests related to About page', () => {

    test('Verify the title of about page', async ({ page }) => {
        // Navigate to about page
        await page.goto('/about');
        // Verify title of the about page
        await expect(page).toHaveTitle(/About/);
    })
})