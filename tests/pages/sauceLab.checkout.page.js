const Page = require("./page.js");

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
    await this.finishButton.waitForClickable();
    await this.finishButton.click();
  }
  async getPrice(index) {
    (await this.price(index)).waitForDisplayed();
    return (await this.price(index)).getText();
  }
  async sumPrices() {
    let num1 = await this.getPrice(3);
    let num2 = await this.getPrice(4);
    let price1 = num1.replace("$", "");
    let price2 = num2.replace("$", "");
    let suma = parseFloat(price1) + parseFloat(price2);
    return suma;
  }
  async tax() {
    let total = await this.getTotalPurchase();
    console.log(total);
    let tax = total * 0.08;
    console.log("tax:", tax.toFixed(1));
    return tax.toFixed(1);
  }

  async getTotalPurchase() {
    let total = await this.itemTotal.getText();
    total = total.replace("Item total: $", "");
    total = parseFloat(total);
    return total;
  }
  async getTaxes() {
    let total = await this.taxLabel.getText();
    total = total.replace("Tax: $", "");
    total = parseFloat(total);
    return total;
  }
}

module.exports = new SauceLabCheckoutPage();
