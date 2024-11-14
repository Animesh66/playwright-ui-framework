import { test, expect } from '@playwright/test'
import exp from 'constants'


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
        const username = 'er.animesh6789'
        // Identify the username field
        await page.getByRole('textbox', { name: 'username' }).nth(1).fill(username);
        // Identify the username field
        await page.getByRole('textbox', { name: 'email' }).nth(1).fill('test6789@email.com');
        // Identify the password field
        await page.getByRole('textbox', { name: 'password' }).nth(1).fill('AnimeshMukherjee@987651');
        // Identify Register button
        await page.getByRole('button', { name: 'register' }).click();
        // Verify that the username should be displayed on the page
        await expect(page.locator('.woocommerce-MyAccount-content')).toContainText(username);
    })
})
