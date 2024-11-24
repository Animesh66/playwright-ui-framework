import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';
import { Logger } from "../utils/logger";
import MyAccount from '../pages/account.page';
import * as allure from "allure-js-commons";

test.describe.configure({ mode: 'serial' });

test.describe('This page contains tests related to my account page', () => {
    const userName = faker.person.firstName();
    const userEmail = faker.internet.email();
    const userPassword = faker.internet.password();
    let myAccount: MyAccount;

    test.beforeEach('Open my account page and verify tittle', async ({ page }) => {
        await allure.epic("My Account Page");
        await allure.feature("My account feature");
        await allure.story("My accounts");
        // Initialize the myAccount page
        myAccount = new MyAccount(page);
        // Open the url of the account
        await myAccount.navigatePage('/my-account');
        // Verify assertions
        Logger.info(`Verify that title have account in the page title.`);
        await expect(page).toHaveTitle(/account/);
        // Identify the username field
        await expect(myAccount.userNameRegistration).toBeVisible();
        Logger.info(`Fill the user name with ${userName}`);
        await myAccount.userNameRegistration.pressSequentially(userName, { delay: 100 });
        // Identify the email field
        await expect(myAccount.userEmailRegistration).toBeVisible();
        Logger.info(`Fill the user email with ${userEmail}`);
        await myAccount.userEmailRegistration.pressSequentially(userEmail, { delay: 100 });
        // Identify the password field
        await expect(myAccount.userPasswordRegistration).toBeVisible();
        Logger.info(`Fill the user password with ${userPassword}`);
        await myAccount.userPasswordRegistration.pressSequentially(userPassword, { delay: 100 });
        // Identify Register button
        await expect(myAccount.userRegisterButton).toBeVisible();
        Logger.info(`Clicking on the Register button.`);
        await myAccount.userRegisterButton.click();
    })

    test('Scenario to test user registration for non-registered user @smoke', async () => {
        //Verify that my account page has logged in and Dasboard link is displayed
        await expect(myAccount.dashboardLink).toBeVisible();
        // Verify that the username should be displayed on the page
        await expect(myAccount.myAccountContent).toContainText(userName);
    })

    test('Scenario to test user registration for registered user @smoke', async () => {
        // Verify that the username should be displayed on the page
        await expect(myAccount.myAccountErrorMessage).toContainText(`Error: An account is already registered with ${userEmail}. Please log in or use a different email address.`);
    })
})
