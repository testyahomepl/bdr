
// Zadanie domowe:
// - Stworzyć nowy plik w pageObjects o nazwie shoppingCart.ts
// - Stworzyć w nim klasę ShoppingCart i zamieścić w nim 3 funkcje dotyczące koszyka zakupowego
// - Wykorzystać tą klasę do testu 'usunięcie produktu z koszyka'


import { test, expect } from '@playwright/test';
import { ShoppingCart} from '../pageObjects/shoppingCart'
let shoppingCart: ShoppingCart


async function goToMenu(page, menuLink: string, menuName: string){
    await page.getByRole('link', { name: menuLink }).click();
    await expect(page.getByRole('link', { name: menuName, exact: true })).toBeVisible();
}
async function choseProduct(page, productLink: string, productName: string, size: string) {
    await page.getByRole('link', { name: productLink }).click();
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();
    await page.getByLabel(size, { exact: true }).nth(1).click();
}



test('usunięcie produktu z koszyka', async ({ page }) => {
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
  await goToMenu(page, 'Ambiance Men', 'Men');
  await choseProduct(page, 'Denim Shirt Denim Shirt $', 'Denim Shirt', 'L');
  // wykorzystanie klasy ShoppingCart w tescie 'usunięcie produktu z koszyka'
  shoppingCart = new ShoppingCart(page);
  await shoppingCart.addToCart();
  await shoppingCart.viewCart();
  await shoppingCart.removeFromCart();
});





