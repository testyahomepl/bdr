import { test } from '@playwright/test';

test('Filtry', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    await page.locator('.main-nav-bar-item').filter({ hasText: 'Contact us' }).getByRole('link').click();
});

