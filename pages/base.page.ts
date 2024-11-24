import { Page } from "@playwright/test";
import { Logger } from "../utils/logger";

class BasePage {
    constructor(protected _page: Page) {
        this._page = _page;
    };

    async navigatePage(url: string) {
        Logger.info(`Lauching the ${url} page.`);
        await this._page.goto(url);
        Logger.info(`Page ${url} is now launched successfully.`)
    }

}

export default BasePage;
