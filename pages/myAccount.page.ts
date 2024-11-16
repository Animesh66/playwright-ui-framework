import { Locator, Page } from "@playwright/test";

class MyAccount {
    userNameRegistration: Locator;
    userEmailRegistration: Locator;
    userPasswordRegistration: Locator;
    userRegisterButton: Locator;
    dashboardLink: Locator;
    myAccountContent: Locator;
    myAccountErrorMessage: Locator;

    constructor(private _page: Page) {
        this._page = _page;
        this.userNameRegistration = this._page.getByRole('textbox', { name: 'username' }).nth(1);
        this.userEmailRegistration = this._page.getByRole('textbox', { name: 'email' }).nth(1);
        this.userPasswordRegistration = this._page.getByRole('textbox', { name: 'password' }).nth(1);
        this.userRegisterButton = this._page.getByRole('button', { name: 'Register' });
        this.dashboardLink = this._page.getByRole('link', { name: /Dashboard/ });
        this.myAccountContent = this._page.locator('.woocommerce-MyAccount-content');
        this.myAccountErrorMessage = this._page.locator('.woocommerce-error');
    };

}

export default MyAccount;