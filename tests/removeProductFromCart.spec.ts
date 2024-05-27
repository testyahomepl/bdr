import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

async function addToCart(page) {
    await page.getByRole('button', { name: 'Add To Cart' }).click();
    await expect(page.getByText('Added to cart successfully!')).toBeVisible();
}
async function viewCart(page) {
    await page.getByRole('link', { name: 'View cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your shopping cart' })).toBeVisible();
}
async function removeFromCart(page) {
    await page.getByRole('link', { name: 'Remove from cart' }).click();
    await expect(page.getByText('Your cart is empty.')).toBeVisible();
}

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page)
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
})

test('usunięcie produktu z koszyka', async ({ page }) => {
  await ecomm.menu().goToMenu('Ambiance Men', 'Men');
  await ecomm.products().choseProduct('Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  await addToCart(page);
  await viewCart(page);
  await removeFromCart(page);
});



