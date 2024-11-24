import { Page, Locator, expect } from '@playwright/test';
import BasePage from "./base.page";
import { Logger } from "../utils/logger";

class ContactPage extends BasePage {
    contactName: Locator;
    conatctEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    submitButton: Locator;
    successMessage: Locator;

    constructor(protected _page: Page) {
        super(_page);
        this.contactName = this._page.getByLabel('Name').first();
        this.conatctEmail = this._page.getByLabel('Email').first();
        this.contactPhone = this._page.getByLabel('Phone').first();
        this.contactMessage = this._page.getByLabel('Message').first();
        this.submitButton = this._page.getByRole('button', { name: 'submit' });
        this.successMessage = this._page.getByRole('alert');
    }

    async fillContactForm(name: string, email: string, phoneNumber: string, conactMessage: string) {
        Logger.info(`Filling the name with ${name}.`);
        await this.contactName.fill(name);
        Logger.info(`Filling the email with ${email}.`);
        await this.conatctEmail.fill(email);
        Logger.info(`Filling the phone number with ${phoneNumber}.`);
        await this.contactPhone.fill(phoneNumber);
        Logger.info(`Filling the message with ${conactMessage}.`);
        await this.contactMessage.fill(conactMessage);
    }

    async submitContactForm() {
        Logger.info(`Clicking on the submit button on contact page.`);
        await this.submitButton.click();
    }

    async verifySuccessMessage() {
        Logger.info(`Verifying the success message after submitting contact form.`);
        await expect(this.successMessage).toContainText("Thanks for contacting us! We will be in touch with you shortly");
    }
}

export default ContactPage;
