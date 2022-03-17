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
  // Methods/Functions
  open(path) {
    return super.open(path);
  }

  async ClickCheckoutButton() {
    await this.ChechOutButton.waitForDisplayed();
    await this.ChechOutButton.click();
  }
  async SetFirstname(firstname) {
    await this.firstname.setValue(firstname);
  }
  async SetLasttname(lastname) {
    await this.lastname.setValue(lastname);
  }
  async SetPostalCode(postalcode) {
    await this.postalCode.waitForDisplayed();
    await this.postalCode.click();
    await this.postalCode.setValue(postalcode);
  }
  async ClickContinueButton() {
    await this.continueButton.waitForDisplayed();
    await this.continueButton.click();
  }
  async ClickfinishButton() {
    await this.finishButton.waitForDisplayed();
    await this.finishButton.click();
  }
}

module.exports = new SauceLabCheckoutPage();
