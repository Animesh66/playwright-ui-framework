import { Page } from "@playwright/test";

class BasePage {

    constructor(private _page: Page) {
        this._page = _page;
    };

}

export default BasePage;