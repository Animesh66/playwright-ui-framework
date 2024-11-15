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

    test('Scenario to test user registration', async ({ page }) => {
        const username = 'er.animesh7676876';
        // Identify the username field
        await expect(page.getByRole('textbox', { name: 'username' }).nth(1)).toBeVisible();
        await page.getByRole('textbox', { name: 'username' }).nth(1).pressSequentially(username, { delay: 100 });
        // Identify the username field
        await page.getByRole('textbox', { name: 'email' }).nth(1).pressSequentially('test7765675675@email.com', { delay: 100 });
        // Identify the password field
        await expect(page.getByRole('textbox', { name: 'password' }).nth(1)).toBeVisible();
        await page.getByRole('textbox', { name: 'password' }).nth(1).pressSequentially('AnimeshMukherjee@987651', { delay: 100 });
        // Identify Register button
        await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
        await page.getByRole('button', { name: 'Register' }).click();
        //Verify that my account page has logged in
        await expect(page.getByRole('link', { name: /Dashboard/})).toBeVisible();
        // Verify that the username should be displayed on the page
        await expect(page.locator('.woocommerce-MyAccount-content')).toContainText(username);
    })
})
