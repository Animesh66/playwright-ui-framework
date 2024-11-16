import { Page } from "@playwright/test";

class BasePage {

    constructor(protected _page: Page) {
        this._page = _page;
    };

    async navigatePage(url: string) {
        await this._page.goto(url);
    }

}

export default BasePage;