const { Given } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");
const percySnapshot = require("@percy/webdriverio");

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
    sauceLabHomePage.doLogout();
    expect(browser).toHaveTitle(websiteName);
  } else {
    await sauceLabLoginPage.open("https://www.saucedemo.com");
    expect(browser).toHaveTitle(websiteName);
    await percySnapshot(browser, "login page");
    await sauceLabLoginPage.usernameInput.waitForClickable();
    await sauceLabLoginPage.passwordInput.waitForClickable();
    await sauceLabLoginPage.loginButton.waitForClickable();
  }
});
