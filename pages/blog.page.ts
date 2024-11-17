import { Page, Locator } from '@playwright/test';
import BasePage from "./basePage.page";

class BlogPage extends BasePage {
    recentPostsList: Locator

    constructor(protected _page: Page) {
        super(_page);
        this.recentPostsList = this._page.locator("#recent-posts-3 ul li");

    }

}

export default BlogPage;