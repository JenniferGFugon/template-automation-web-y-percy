// import Page from './page.js';
const Page = require("./page.js");

class GooglePage extends Page {
  // Selector variables
  get loginButton() {
    return $("#loginButton");
  }

  get PasswordInput() {
    return $("#password-input");
  }
  get SearchInput() {
    return $("input.gLFyf.gsfi");
  }
  get SearchResult() {
    return $(".LC20lb.DKV0Md");
  }

  // Methods/Functions
  open(path) {
    return super.open(path);
  }
  async SearchBoxAssertion() {
    await expect(this.SearchInput.isDisplayed()).to.be.true;
  }
  async SearchText(textToSearch) {
    await this.SearchInput.setValue(textToSearch);
    await browser.keys("Enter");
  }
  async LoginAssertions() {
    await this.loginButton.waitForDisplayed();
    await expect(this.EmailInput.isExisting()).to.be.true;
    await expect(this.PasswordInput.isExisting()).to.be.true;
  }
  async SetEmail() {
    await this.EmailInput.setValue("Email@email.com");
  }
  async SetPassword() {
    await this.PasswordInput.setValue("password");
  }
}

module.exports = new GooglePage();
