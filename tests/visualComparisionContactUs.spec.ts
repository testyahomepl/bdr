// Zadanie domowe - stworzenie nowego testu:
// przejście do zakładki "Contact us"
// porównanie wizualne całej strony internetowej z zamaskowanym przyciskiem "Send"

import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test('Wizualne porównanie ContactUs', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    await page.locator('.main-nav-bar-item').filter({ hasText: 'Contact us' }).click();

    const sendButton = page.locator('.tebluenter text-lg-left mt-lg-1 mb-4').filter({ hasText: 'Send' })
    
    await expect(page).toHaveScreenshot({mask: await sendButton.all(), maskColor: 'blue' })
});


 




