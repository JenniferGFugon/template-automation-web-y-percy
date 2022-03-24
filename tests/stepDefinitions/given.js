const { Given } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");
const sauceLabCheckoutPage = require("../pages/sauceLab.checkout.page.js");
const { sumPrices } = require("../pages/sauceLab.checkout.page.js");

// Google website
Given(/^a user at google$/, async function () {
  await googlePage.open("/");
  await expect(await browser.getTitle()).to.equal("Google");
});

// Sauce labs demo page
Given("a user at {string} login page", async function (websiteName) {
  if ((await browser.getUrl()).includes("inventory.html")) {
    // Do logout for each example in the scenario outline, need to start from the login page
    //before logout we have to reset the app
    await sauceLabHomePage.ResetApp();
    await sauceLabHomePage.doLogout();

    //check the brower has thas the correct website name
    expect(browser).toHaveTitle(websiteName);
  } else {
    //open base url
    await sauceLabLoginPage.open("/");
    //check the brower has thas the correct website name
    expect(browser).toHaveTitle(websiteName);
    await sauceLabLoginPage.usernameInput.waitForDisplayed();
    await sauceLabLoginPage.passwordInput.waitForDisplayed();
    await sauceLabLoginPage.loginButton.waitForClickable();
  }
});

Given("a user at {string} home page", async function (websiteName) {
  //open base url
  await sauceLabLoginPage.open("/");
  //check the brower has thas the correct website name
  expect(browser).toHaveTitle(websiteName);
  await sauceLabLoginPage.usernameInput.waitForDisplayed();
  await sauceLabLoginPage.passwordInput.waitForDisplayed();
  await sauceLabLoginPage.loginButton.waitForClickable();
  //Log in on the sauce demo page
  await sauceLabLoginPage.Login();
});
Given("a user at {string} checkout page", async function (websiteName) {
  //open base url
  await sauceLabLoginPage.open("/");
  await sauceLabLoginPage.usernameInput.waitForDisplayed();
  await sauceLabLoginPage.passwordInput.waitForDisplayed();
  await sauceLabLoginPage.loginButton.waitForClickable();
  //Log in on the sauce demo page
  await sauceLabLoginPage.Login();
  //add products to shopping cart
  await sauceLabHomePage.AddProducts();
  //validate the products are added to shopping cart
  await sauceLabHomePage.validateProductsAreAdded();
  //open the shopping cart page.
  await sauceLabCheckoutPage.open("/cart.html");
});
