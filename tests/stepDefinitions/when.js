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
  await browser.pause(2000);

  await sauceLabCartPage.ClickDeleteProduct1();
});
When(/^the user clicks to add the second product$/, async function () {
  await sauceLabCartPage.ClickSecondProduct();
  await browser.pause(2000);
  await sauceLabCartPage.ClickDeleteProduct2();
});

//checkout
When("the user clicks the checkout button", async function () {
  expect(await sauceLabCheckoutPage.ClickCheckoutButton());
  await browser.pause(1000);
});

When(
  "the user types {string} in the the firstname input",
  async function (firstname) {
    await sauceLabCheckoutPage.SetFirstname(firstname);
  }
);

When(
  "the user types {string} in the the lastname input",
  async function (lastname) {
    await sauceLabCheckoutPage.SetLasttname(lastname);
  }
);

When(
  "the user types {string} in the the postal code input",
  async function (postalcode) {
    await sauceLabCheckoutPage.SetPostalCode(postalcode);
  }
);
When("the user clicks on continue button", async function () {
  await sauceLabCheckoutPage.ClickContinueButton();
});
When("the user clicks on finish button", async function () {
  await sauceLabCheckoutPage.ClickfinishButton();
  await browser.pause(1000);
});
