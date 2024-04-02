import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io');

// //css
// await page.locator('css=#app > div > main > div.mt-15 > div > div:nth-child(2) > a > span').click()


//playwright
await page.getByRole('link', { name: 'Shop women' }).click();


});














