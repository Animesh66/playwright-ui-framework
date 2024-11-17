import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';

test.describe('This file contains tests related to contact page', () => {
  let contact: ContactPage;

  test.beforeEach(({ page }) => {
    contact = new ContactPage(page);
    // Naviagte to the contact page
    contact.navigatePage('/contact');
    // Verify that page title contains Conatact
    expect(page).toHaveTitle(/Contact/);
  })

  test('Verify that success message after submitting the contact from', async ({ page }) => {

    // Fill all the form
    await contact.fillContactForm('Animesh', 'test123@gmail.com', '+44123456789', 'This is a test contact');
    //  Submit the form
    await contact.submitContactForm();
    // Verify success message is appearing in the screen
    await contact.verifySuccessMessage();

  });
})
