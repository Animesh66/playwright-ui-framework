import { Page, Locator } from '@playwright/test';
import BasePage from "./basePage.page";

class BlogPage extends BasePage {
    recentPost: Locator

    constructor(protected _page: Page) {
        super(_page);
        this.recentPost = this._page.locator(".widget widget-sidebar-right");



    }

}

export default BlogPage;