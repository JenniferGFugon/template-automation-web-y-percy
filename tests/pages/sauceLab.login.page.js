// import Page from './page.js';
const Page = require("./page.js");

class SauceLabLoginPage extends Page {
  // Selector variables
  get loginButton() {
    return $("#login-button");
  }
  get usernameInput() {
    return $("#user-name");
  }
  get passwordInput() {
    return $("#password");
  }
  get errorMessage() {
    return $(".error-message-container > h3");
  }

  // Methods/Functions
  open(path) {
    return super.open(path);
  }
  async SetUsername(username) {
    await this.usernameInput.setValue(username);
  }
  async SetPassword(password) {
    await this.passwordInput.setValue(password);
  }

  async Login() {
    await this.SetUsername("standard_user");
    await this.SetPassword("secret_sauce");
    await this.loginButton.waitForDisplayed();
    await this.loginButton.click();
  }
}

module.exports = new SauceLabLoginPage();
