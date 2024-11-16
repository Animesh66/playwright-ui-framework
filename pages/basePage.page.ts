import { Locator, Page } from "@playwright/test";

class BasePage {
    userNameRegistration: Locator

    constructor(private _page: Page) {
        this._page = _page;

    };

}

export default BasePage;