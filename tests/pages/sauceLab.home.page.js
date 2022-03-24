const Page = require("./page.js");

class SauceLabHomePage extends Page {
  // Selector variables
  get productsHeaderLabel() {
    return $("span.title");
  }
  get productsFilter() {
    return $(".product_sort_container");
  }
  get hamburguerMenu() {
    return $("#react-burger-menu-btn");
  }
  get hamburguerMenuLogoutButton() {
    return $("#logout_sidebar_link");
  }
  get shoppingCartButton() {
    return $("#shopping_cart_container");
  }
  get inventoryListContainer() {
    return $(".inventory_list");
  }
  get inventoryList() {
    return $$(".inventory_list > .inventory_item");
  }
  get product1() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get product2() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  //add products to cart
  get removeProduct1() {
    return $("#remove-sauce-labs-backpack");
  }
  get removeProduct2() {
    return $("#remove-sauce-labs-bike-light");
  }
  get shoppingCartBadge() {
    return $("span.shopping_cart_badge");
  }
  get resetButton() {
    return $("#reset_sidebar_link");
  }
  get closeMenuButton() {
    return $("#react-burger-cross-btn");
  }
  get nameProduct1() {
    return $("#item_4_title_link");
  }
  get nameProduct2() {
    return $("#item_0_title_link");
  }
  // Methods/Functions
  open(path) {
    return super.open(path);
  }
  async HeaderAssertions() {
    expect(this.productsHeaderLabel).toBeDisplayed();
    expect(this.productsFilter).toBeDisplayed();
    expect(this.hamburguerMenu).toBeDisplayed();
    expect(this.shoppingCartButton).toBeDisplayed();
  }

  /**
   *Function to log out the sauce page
   */
  async doLogout() {
    await this.hamburguerMenuLogoutButton.waitForClickable();
    await this.hamburguerMenuLogoutButton.click();
  }
  //add products to  the shopping cart
  async ClickFirstProduct() {
    await this.product1.waitForClickable();
    await this.product1.click();
  }
  async ClickSecondProduct() {
    await this.product2.waitForClickable();
    await this.product2.click();
  }
  async ClickDeleteProduct1() {
    await this.removeProduct1.waitForClickable();
    await this.removeProduct1.click();
  }
  async ClickDeleteProduct2() {
    await this.removeProduct2.waitForClickable();
    await this.removeProduct2.click();
  }

  /**
   *Function to reset the app state
   */
  async ResetApp() {
    await this.hamburguerMenu.waitForDisplayed();
    await this.hamburguerMenu.click();
    await this.resetButton.waitForClickable();
    await this.resetButton.click();
  }

  /**
   *Function to add products to shopping cart
   */
  async AddProducts() {
    await this.product1.waitForClickable();
    await this.ClickFirstProduct();
    await this.product2.waitForClickable();
    await this.ClickSecondProduct();
  }
  /**
   *Function to validate that the products are added to the shopping cart
   */
  async validateProductsAreAdded() {
    expect(await this.shoppingCartBadge.getText()).toEqual("2");
  }
}

module.exports = new SauceLabHomePage();
