import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { MenuPage } from "./menuPage";
import { ProductsPage } from "./productsPage"

export class Ecomm {
    private readonly page: Page
    private readonly LoginPage: LoginPage
    private readonly MenuPage: MenuPage
    private readonly ProductsPage: ProductsPage

    constructor(page: Page) {
        this.page
        this.LoginPage = new LoginPage(page)
        this.MenuPage = new MenuPage(page)
        this.ProductsPage = new ProductsPage(page)
    }

    login(){
        return this.LoginPage
    }
    menu(){
        return this.MenuPage
    }
    products(){
        return this.ProductsPage
    }

}
