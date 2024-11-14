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
        // Identify the username field
        await page.getByRole('textbox', { name: 'username' }).nth(1).fill('animesh66');
        // Identify the username field
        await page.getByRole('textbox', { name: 'email' }).nth(1).fill('test@email.com');
        // Identify the password field
        await page.getByRole('textbox', { name: 'password' }).nth(1).fill('Welcome@123');
        // Identify Register button
        await page.getByRole('button', { name: 'register' }).click();
    })
})
