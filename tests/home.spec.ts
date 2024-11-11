import { test, expect } from '@playwright/test';

test.describe('This file contains tests related to Homepage', () => {

  test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SDET/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

})
