import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io');

  await page.goto('https://demo.evershop.io/');
  await page.getByRole('link', { name: 'Men', exact: true }).click();
  await page.getByRole('link', { name: 'Nike air zoom pegasus' }).first().click();
  await expect(page.locator('h1')).toContainText('Nike air zoom pegasus 35');

});


