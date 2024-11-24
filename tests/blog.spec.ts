import { test, expect } from '@playwright/test'
import BlogPage from '../pages/blog.page';
import { Logger } from "../utils/logger";

test.describe('This file contains tests related to blog page', () => {
    let blog: BlogPage;

    test.beforeEach(async ({ page }) => {
        // Initalize the object for blog page
        blog = new BlogPage(page);
        // Navigate to blog page
        await blog.navigatePage('/blog');
        // Verify title of the blog page
        await expect(page).toHaveTitle(/Blog/);
    })

    test('Verify recent posts count must be equals to 5', async () => {
        // Get all the elements of recent post containing multiple elements and count() will
        // return the count of elements in the item
        expect(await blog.recentPostsList.count()).toEqual(5);
        Logger.info(`Verify that recent posts have 5 posts.`);
    });

    test('Verify each recent post must have at least 10 charater for headign', async () => {
        // Loop over individual elements of the recent post and get the count and verisy the lengths
        for (let post of await blog.recentPostsList.elementHandles()) {
            let postHeading = await post.