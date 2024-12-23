import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';
import { Logger } from "../utils/logger";

test.describe('This file contains tests related to contact page', () => {
  let contact: ContactPage;
  let firstName: string = faker.person.firstName();
  let userEmail: string = faker.internet.email();
  let userPhone: string = faker.phone.number();
  let userMessage: string = faker.lorem.paragraph();


  test.beforeEach('Open contact page and verify tittle', async ({ page }) => {
    contact = new ContactPage(page);
    await test.step('SetUp: User is opening contact page and verify title', async () => {
      // Naviagte to the contact page
      await contact.navigatePage('/contact');
      // Verify that page title contains Conatact
      Logger.info(`Verify that title have Contact in the page title.`);
      await expect(page).toHaveTitle(/Contact/);
    });

  })

  test('Verify that success message after submitting the contact from @smoke', async () => {
    await test.step('Step: Fill all the contact details', async () => {
      // Fill all the form
      Logger.info(`Filling out all the details in contact from`);
      await contact.fillContactForm(firstName, userEmail, userPhone, userMessage);
    });
    await test.step('Step: Click on the submit button', async () => {
      //  Submit the form
      await contact.submitContactForm();
    });
    await test.step('Step: Verify that success message is comming correctly.', async () => {
      // Verify success message is appearing in the screen
      await contact.verifySuccessMessage();
    });
  });
})
