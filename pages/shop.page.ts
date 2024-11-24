import { Page, Locator } from "playwright";
import BasePage from "./base.page";
import { Logger } from "../utils/logger";
import { expect } from "playwright/test";

class ShopPage extends BasePage {
    filerSorting: Locator;

    constructor(protected _page: Page) {
        super(_page);
        this.filerSorting = this._page.getByLabel('Shop order');
    }

    async VerifySortBy(filterValue: string) {
        Logger.info(`Selecting the sort by option to ${filterValue}`);
        await this.filerSorting.selectOption(filterValue);
        await expect(this.filerSorting).toHaveValue(filterValue);
        Logger.info(`Filter is changed to ${filterValue}`);
    }
}

export default ShopPage;