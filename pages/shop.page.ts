import { Page, Locator } from "playwright";
import BasePage from "./basePage.page";
import { Logger } from "../utils/logger";
import { expect } from "playwright/test";

class ShopPage extends BasePage {
    filerSorting: Locator;

    constructor(protected _page: Page) {
        super(_page);
        this.filerSorting = this._page.getByLabel('Shop order');
    }

    async VerifySortBy(label: string) {
        Logger.info(`Selecting the sort by option to ${label}`);
        await this.filerSorting.selectOption(label);
        expect(this.filerSorting).toHaveValue(label);
        Logger.info(`Filter is changed to ${label}`);
    }
}

export default ShopPage;