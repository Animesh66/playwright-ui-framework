import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('This file contains tests related to contact page', () => {
  let contact: ContactPage;
  let firstName: string = faker.person.firstName();
  let userEmail: string = faker.internet.email();
  let userPhone: string = faker.phone.number();
  let userMessage: string = faker.lorem.paragraph();


  test.beforeEach(({ page }) => {
    contact = new ContactPage(page);
    // Naviagte to the contact page
    contact.navigatePage('/contact/');
    // Verify that page title contains Conatact
    expect(page).toHaveTitle(/Contact/);
  })

  test('Verify that success message after submitting the contact from', async () => {

    // Fill all the form
    await contact.fillContactForm(firstName, userEmail, userPhone, userMessage);
    //  Submit the form
    await contact.submitContactForm();
    // Verify success message is appearing in the screen
    await contact.verifySuccessMessage();

  });
})
