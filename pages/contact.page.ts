import { Page, Locator, expect } from '@playwright/test';
import BasePage from "./basePage.page";

class ContactPage extends BasePage {
    contactName: Locator;
    conatctEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    submitButton: Locator;
    successMessage: Locator;

    constructor(protected _page: Page) {
        super(_page);
        this.contactName = this._page.getByLabel('Name');
        this.conatctEmail = this._page.getByLabel('Email');
        this.contactPhone = this._page.getByLabel('Phone');
        this.contactMessage = this._page.getByLabel('Message');
        this.submitButton = this._page.getByRole('button', { name: 'submit' });
        this.successMessage = this._page.getByRole('alert');
    }

    async fillContactForm(name: string, email: string, phoneNumber: string, conactMessage: string) {
        await this.contactName.fill(name);
        await this.conatctEmail.fill(email);
        await this.contactPhone.fill(phoneNumber);
        await this.contactMessage.fill(conactMessage);
    }

    async submitContactForm() {
        await this.submitButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toContainText("Thanks for contacting us! We will be in touch with you shortly");
    }
}

export default ContactPage;