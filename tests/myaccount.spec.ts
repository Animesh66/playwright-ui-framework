import { test, expect } from '@playwright/test'
import MyAccount from '../pages/myaccount.page';
import { faker } from '@faker-js/faker';

test.describe.configure({ mode: 'serial' });

test.describe('This page contains tests related to my account page', () => {
    const userName = faker.person.firstName();
    const userEmail = faker.internet.email();
    const userPassword = faker.internet.password();
    let myAccount: MyAccount;

    test.beforeEach(async ({ page }) => {
        // Initialize the myAccount page
        myAccount = new MyAccount(page);
        // Open the url of the account
        await myAccount.navigatePage('/my-account');
        // Verify assertions
        await expect(page).toHaveTitle(/account/);
        // Identify the username field
        await expect(myAccount.userNameRegistration).toBeVisible();
        await myAccount.userNameRegistration.pressSequentially(userName, { delay: 100 });
        // Identify the email field
        await expect(myAccount.userEmailRegistration).toBeVisible();
        await myAccount.userEmailRegistration.pressSequentially(userEmail, { delay: 100 });
        // Identify the password field
        await expect(myAccount.userPasswordRegistration).toBeVisible();
        await myAccount.userPasswordRegistration.pressSequentially(userPassword, { delay: 100 });
        // Identify Register button
        await expect(myAccount.userRegisterButton).toBeVisible();
        await myAccount.userRegisterButton.click();
    })

    test('Scenario to test user registration for non-registered user', async () => {
        //Verify that my account page has logged in and Dasboard link is displayed
        await expect(myAccount.dashboardLink).toBeVisible();
        // Verify that the username should be displayed on the page
        await expect(myAccount.myAccountContent).toContainText(userName);
    })

    test('Scenario to test user registration for registered user', async () => {
        // Verify that the username should be displayed on the page
        await expect(myAccount.myAccountErrorMessage).toContainText(`Error: An account is already registered with ${userEmail}. Please log in or use a different email address.`);
    })
})
