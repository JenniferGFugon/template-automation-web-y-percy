const Page = require("./page.js");

class SauceLabCartPage extends Page {
  // Selector variables

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

  get productButton() {
    return $("#remove-sauce-labs-backpack");
  }
  // Methods/Functions
  open(path) {
    return super.open(path);
  }

  //products to add to the shopping cart
  async ClickFirstProduct() {
    await (await this.product1).waitForDisplayed();
    await (await this.product1).click();
  }
  async ClickSecondProduct() {
    await (await this.product2).waitForDisplayed();
    await (await this.product2).click();
  }
  async ClickDeleteProduct1() {
    await (await this.removeProduct1).waitForDisplayed();
    await (await this.removeProduct1).click();
  }
  async ClickDeleteProduct2() {
    await (await this.removeProduct2).waitForDisplayed();
    await (await this.removeProduct2).click();
  }
  async SetSpamBadge() {
    await this.shoppingCartBadge.setValue(0);
  }
}

module.exports = new SauceLabCartPage();
