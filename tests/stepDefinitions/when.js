const { When } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabCheckoutPage = require("../pages/sauceLab.checkout.page");
const sauceLabCartPage = require("../pages/sauceLab.cart.page.js");

// Google website
When(/^the page loads$/, async function () {
  await googlePage.SearchInput.waitForDisplayed();
});

When("the user type {string}", async function (keyword) {
  await googlePage.SearchText(keyword);
  await browser.pause(1000);
});

// Sauce labs demo page
When(
  "the user types {string} in the username input",
  async function (username) {
    await sauceLabLoginPage.SetUsername(username);
  }
);
When(
  "the user types {string} in the password input",
  async function (password) {
    await sauceLabLoginPage.SetPassword(password);
  }
);
When(/^the user clicks the Login button$/, async function () {
  await sauceLabLoginPage.loginButton.click();
});

//add products to the shopping cart
When(
  "the user clicks on the add to cart button of  the first product",
  async function () {
    await sauceLabCartPage.ClickFirstProduct();
  }
);
When(
  /^the user clicks on the add to cart button of  the second product$/,
  async function () {
    await sauceLabCartPage.ClickSecondProduct();
  }
);

//products not added to shopping cart
When("the user clicks to add the first product", async function () {
  await sauceLabCartPage.ClickFirstProduct();
  await sauceLabCartPage.ClickDeleteProduct1();
});
When(/^the user clicks to add the second product$/, async function () {
  await sauceLabCartPage.ClickSecondProduct();
  await sauceLabCartPage.ClickDeleteProduct2();
});

//checkout
When("the user clicks the checkout button", async function () {
  await sauceLabCheckoutPage.ChechOutButton.waitForDisplayed();
  await sauceLabCheckoutPage.ClickCheckoutButton();
  // Usar WaitForDisplayed en vez de browser.pause
});

When(
  "the user types {string} in the the firstname input",
  async function (firstname) {
    await sauceLabCheckoutPage.firstname.waitForDisplayed();
    await sauceLabCheckoutPage.SetFirstname(firstname);
  }
);

When(
  "the user types {string} in the the lastname input",
  async function (lastname) {
    await sauceLabCheckoutPage.lastname.waitForDisplayed();
    await sauceLabCheckoutPage.SetLasttname(lastname);
  }
);

When(
  "the user types {string} in the the postal code input",
  async function (postalcode) {
    await sauceLabCheckoutPage.postalCode.waitForDisplayed();
    await sauceLabCheckoutPage.SetPostalCode(postalcode);
  }
);
When("the user clicks on continue button", async function () {
  await sauceLabCheckoutPage.continueButton.waitForDisplayed();
  await sauceLabCheckoutPage.ClickContinueButton();
});
When("the user clicks on finish button", async function () {
  await sauceLabCheckoutPage.finishButton.waitForDisplayed();
  await sauceLabCheckoutPage.ClickfinishButton();
});
