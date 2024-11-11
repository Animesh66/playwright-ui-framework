import { test, expect } from '@playwright/test';

test.describe('This file contains tests related to Homepage', () => {

  test('homepage contains SDET in title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SDET/);
  });

  test('get started button to be visible', async ({ page }) => {
    await page.goto('/');

    // Click the get started link.
    let getStartedButton = page.getByRole('button', { name: 'get started' });

    // Expects that get started button to be visible.
    expect(getStartedButton).toBeVisible;
  });

  test('Verify title of about page', async ({ page }) => {
    // Navigate to about page
    await page.goto('/about');
    // Verify title of the about page
    await expect(page).toHaveTitle(/About/);
  })

})
