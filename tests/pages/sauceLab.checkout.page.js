const Page = require("./page.js");
const sauceLabHomePage = require("./sauceLab.home.page.js");

class SauceLabCheckoutPage extends Page {
  // Selector variables
  get ChechOutButton() {
    return $("#checkout");
  }
  get firstname() {
    return $("#first-name");
  }

  get lastname() {
    return $("#last-name");
  }

  get postalCode() {
    return $("#postal-code");
  }
  get continueButton() {
    return $("#continue");
  }
  get finishButton() {
    return $("#finish");
  }

  get spanTitle() {
    return $("span.title");
  }
  get itemTotal() {
    return $(".summary_subtotal_label");
  }
  get totalPurchase() {
    return $(".summary_total_label");
  }
  get taxLabel() {
    return $(".summary_tax_label");
  }

  get nameProduct1() {
    return $(`.cart_list :nth-child(3) .inventory_item_name`);
  }
  get nameProduct2() {
    return $(`.cart_list :nth-child(4) .inventory_item_name`);
  }
  get shippingInformation() {
    return $(`.summary_info :nth-child(4)`);
  }
  get paymentInformation() {
    return $(`.summary_info :nth-child(2)`);
  }
  summary_value_label;

  // Methods/Functions
  open(path) {
    return super.open(path);
  }
  async price(index) {
    return $(`.cart_list :nth-child(${index}) div.inventory_item_price`);
  }
  async ClickCheckoutButton() {
    //validate that the products are added to the shopping cart before
    //click the checkout button
    await sauceLabHomePage.validateProductsAreAdded();
    //Check the product name of the checkout page is the same with
    //the product name of the homepage.
    expect(await this.nameProduct1.getText()).toEqual(
      await this.nameProduct1.getText()
    );
    expect(await this.nameProduct2.getText()).toEqual(
      await this.nameProduct2.getText()
    );
    //Click the checkout button
    await this.ChechOutButton.waitForClickable();
    await this.ChechOutButton.click();
  }

  async SetFirstname(firstname) {
    await this.firstname.waitForDisplayed();
    await this.firstname.setValue(firstname);
  }

  async SetLasttname(lastname) {
    await this.lastname.waitForDisplayed();

    await this.lastname.setValue(lastname);
  }
  async SetPostalCode(postalcode) {
    await this.postalCode.waitForDisplayed();
    await this.postalCode.setValue(postalcode);
  }
  async ClickContinueButton() {
    await this.continueButton.waitForClickable();
    await this.continueButton.click();
  }

  async ClickfinishButton() {
    //check the user is on the correct page
    expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    //check the payment information
    expect(await this.paymentInformation.getText()).toEqual("SauceCard #31337");
    // the shipping information
    expect(await this.shippingInformation.getText()).toEqual(
      "FREE PONY EXPRESS DELIVERY!"
    );
    // check that the subtotal of the products matches the sum of
    // the product prices
    expect(await this.getSubTotal()).toEqual(await this.sumPrices());

    //check that the taxes are calculated correctly
    expect(await this.getTaxes()).toEqual(await this.tax());
    //check the total purchase is calculated correctly
    expect(await this.getTotalPurchase()).toEqual(
      await this.sumTotalAndTaxes()
    );
    //click the finish button after all the assertions
    await this.finishButton.waitForClickable();
    await this.finishButton.click();
  }

  /**
   *Function to get the product price
   * @param {number} index
   * @return the product price
   */
  async getPrice(index) {
    (await this.price(index)).waitForDisplayed();
    return (await this.price(index)).getText();
  }
  /**
   *Function add the product prices
   * @return the prices sum
   */
  async sumPrices() {
    let num1 = await this.getPrice(3);
    let num2 = await this.getPrice(4);
    let price1 = num1.replace("$", "");
    let price2 = num2.replace("$", "");
    let suma = parseFloat(price1) + parseFloat(price2);
    return suma;
  }
  /**
   *Function to calculate the tax
   * @return the tax
   */
  async tax() {
    let total = await this.getSubTotal();
    let tax = total * 0.08;

    return parseFloat(tax.toFixed(1));
  }

  /**
   *Function to get the subtotal from the order summary
   * @return the order subtotal
   */
  async getSubTotal() {
    let total = await this.itemTotal.getText();
    total = total.replace("Item total: $", "");
    total = parseFloat(total);
    return total;
  }

  /**
   *Function to get the tax from the order summary
   * @return the tax
   */
  async getTaxes() {
    let total = await this.taxLabel.getText();
    total = total.replace("Tax: $", "");
    total = parseFloat(total);
    return total;
  }

  /**
   *Function to get the total purchase from the order summary
   * @return the total purchase
   */
  async getTotalPurchase() {
    let total = await this.totalPurchase.getText();
    total = total.replace("Item total: $", "");
    total = parseFloat(total);
    return total;
  }

  /**
   *Function to add subtotal and taxes and verify if the
   *amount is correct
   * @return the total purchase
   */
  async sumTotalAndTaxes() {
    const subtotal = await this.getTotalPurchase();
    const taxes = await this.getTaxes();
    let sumTotal = subtotal + taxes;
    return parseFloat(sumTotal);
  }
}

module.exports = new SauceLabCheckoutPage();
