import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page)
    await ecomm.login().loginToShop();
})

test.afterEach(async () => {
    await ecomm.login().signedOut();
})

test('Wizualne porównanie', async ({ page }) => {
    const email = page.locator('.account-page-user-info-item-definition')
    await expect(page.locator('#content > .account-page')).toHaveScreenshot({mask: await email.all(), maskColor: 'white' })
});

