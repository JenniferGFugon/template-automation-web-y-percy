const { Given } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");
const sauceLabCartPage = require("../pages/sauceLab.cart.page.js");

// Google website
Given(/^a user at google$/, async function () {
  await googlePage.open("/");
  await expect(await browser.getTitle()).to.equal("Google");
  // browser.pause(1000);
});

// Sauce labs demo page
Given("a user at {string} login page", async function (websiteName) {
  if ((await browser.getUrl()).includes("inventory.html")) {
    // Do logout for each example in the scenario outline, need to start from the login page
    await sauceLabHomePage.ResetApp();
    await sauceLabHomePage.doLogout();
    expect(browser).toHaveTitle(websiteName);
  } else {
    await sauceLabLoginPage.open("https://www.saucedemo.com");
    expect(browser).toHaveTitle(websiteName);
    await sauceLabLoginPage.usernameInput.waitForDisplayed();
    await sauceLabLoginPage.passwordInput.waitForDisplayed();
    await sauceLabLoginPage.loginButton.waitForClickable();
    await browser.pause(2000);
  }
});

Given("a user at {string} home page", async function (websiteName) {
  await sauceLabHomePage.open("https://www.saucedemo.com");
  expect(await sauceLabLoginPage.Login());
  await browser.pause(2000);
});
Given("a user at {string} checkout page", async function (websiteName) {
  await sauceLabLoginPage.open("https://www.saucedemo.com");
  expect(await sauceLabLoginPage.Login());
  await sauceLabCartPage.ClickFirstProduct();
  await sauceLabCartPage.ClickSecondProduct();
  await sauceLabCartPage.open("https://www.saucedemo.com/cart.html");
  await browser.pause(1000);
});
