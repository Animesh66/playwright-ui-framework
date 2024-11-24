import { test, expect } from '@playwright/test';
import ShopPage from '../pages/shop.page';
import { Logger } from "../utils/logger";

let filterOptions = [{ filterName: 'Sort by popularity' },
{ filterName: 'Sort by average rating' },
{ filterName: 'Sort by latest' },
{ filterName: 'Sort by price: low to high' },
{ filterName: 'Sort by price: high to low' }];

filterOptions.forEach(({ filterName }) => {
    test.describe('This file contains tests related to shop page', () => {
        let shop: ShopPage;

        test.beforeEach(async ({ page }) => {
            shop = new ShopPage(page);
            // Navigate to shop page
            Logger.info("Navigating to shop page.");
            await shop.navigatePage('/shop');
            // Verify page title
            Logger.info("Verify page title have shop");
            await expect(page).toHaveTitle(/Shop/);
        })

        test(`Verify the sorting is working fine for ${filterName}`, async () => {
            await shop.VerifySortBy(filterName);
        });
    });
});
