import { test, expect } from '@playwright/test';
import ShopPage from '../pages/shop.page';
import { Logger } from "../utils/logger";

let filterOptions = [{ filterValue: 'popularity' },
{ filterValue: 'rating' },
{ filterValue: 'date' },
{ filterValue: 'price' },
{ filterValue: 'price-desc' }];

filterOptions.forEach(({ filterValue }) => {
    test.describe('This file contains tests related to shop page', () => {
        let shop: ShopPage;

        test.beforeEach('Open shop page and verify tittle', async ({ page }) => {
            shop = new ShopPage(page);
            await test.step('SetUp: Open shop page and verify title', async () => {
                // Navigate to shop page
                Logger.info("Navigating to shop page.");
                await shop.navigatePage('/shop');
                // Verify page title
                Logger.info("Verify page title have shop");
                await expect(page).toHaveTitle(/Shop/);
            });

        })

        test(`Verify the sorting dropdown can be changed based on ${filterValue} @sanity`, async () => {
            await test.step(`Step: Select filter value ${filterValue}`, async () => {
                Logger.info(`Selecting filer of shop page by ${filterValue}`);
                await shop.VerifySortBy(filterValue);
            });

        });
    });
});
