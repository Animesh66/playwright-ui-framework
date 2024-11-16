import { test, expect } from '@playwright/test'
import MyAccount from '../pages/myaccount.page';

test.describe.configure({ mode: 'serial' });

test.describe('This page contains tests related to my account page', () => {
    const userName = 'Testuser76287';
    const userEmail = `${userName}@email.com`;
    const userPassword = 'AnimeshMukherjee@987651';
    let myAcount: MyAccount;

    test.beforeEach(async ({ page }) => {
        // Initialize the myAccount page
        myAcount = new MyAccount(page);
        // Open the url of the account
        await page.goto('/my-account');
        // Verify assertions
        await expect(page).toHaveTitle(/account/);
        // Identify the username field
        await expect(myAcount.userNameRegistration).toBeVisible();
        await myAcount.userNameRegistration.pressSequentially(userName, { delay: 100 });
        // Identify the email field
        await expect(myAcount.userEmailRegistration).toBeVisible();
        await myAcount.userEmailRegistration.pressSequentially(userEmail, { delay: 100 });
        // Identify the password field
        await expect(myAcount.userPasswordRegistration).toBeVisible();
        await myAcount.userPasswordRegistration.pressSequentially(userPassword, { delay: 100 });
        // Identify Register button
        await expect(myAcount.userRegisterButton).toBeVisible();
        await myAcount.userRegisterButton.click();
    })

    test('Scenario to test user registration for non-registered user', async () => {
        //Verify that my account page has logged in and Dasboard link is displayed
        await expect(myAcount.dashboardLink).toBeVisible();
        // Verify that the username should be displayed on the page
        await expect(myAcount.myAccountContent).toContainText(userName);
    })

    test('Scenario to test user registration for registered user', async () => {
        // Verify that the username should be displayed on the page
        await expect(myAcount.myAccountErrorMessage).toContainText(`Error: An account is already registered with ${userEmail}. Please log in or use a different email address.`);
    })
})
