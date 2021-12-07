
const Page = require("./page.js")

class SauceLabHomePage extends Page {

    // Selector variables
    get productsHeaderLabel() {
        return $('span.title')
    }
    get productsFilter() {
        return $('.product_sort_container')
    }
    get hamburguerMenu() {
        return $('#react-burger-menu-btn')
    }
    get hamburguerMenuLogoutButton() {
        return $('#logout_sidebar_link')
    }
    get shoppingCartButton() {
        return $('#shopping_cart_container')
    }
    get inventoryListContainer() {
        return $('.inventory_list')
    }
    get inventoryList() {
        return $$('.inventory_list > .inventory_item')
    }

    // Methods/Functions
    open(path) {
        return super.open(path);
    }
    async HeaderAssertions(){
        expect(this.productsHeaderLabel).toBeDisplayed()
        expect(this.productsFilter).toBeDisplayed()
        expect(this.hamburguerMenu).toBeDisplayed()
        expect(this.shoppingCartButton).toBeDisplayed()
    }
    async doLogout(){
        await this.hamburguerMenu.click()
        await this.hamburguerMenuLogoutButton.waitForClickable()
        await this.hamburguerMenuLogoutButton.click()

    }
}

module.exports = new SauceLabHomePage();