import { Page } from "@playwright/test";

class BasePage {

    constructor(protected _page: Page) {
        this._page = _page;
    };

}

export default BasePage;