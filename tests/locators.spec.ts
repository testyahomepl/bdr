import { test, expect } from '@playwright/test';


test('lokalizator - getByRole', async ({ page }) => {
    await page.locator('#header').getByRole('link', { name: 'Fashion Marketplace' }).click();
    await page.getByRole('link', { name: 'Women Women' }).click();
 
});


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%