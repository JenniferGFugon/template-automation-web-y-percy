const { Given } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");

const percySnapshot = require("@percy/webdriverio");

//Establecer contador para ver las veces que se ejecuta el step
//ya que si no percy da un error:
//" Error: The name of each snapshot must be unique, and this name already exists in the build"
let cont = 0;

// Google website
Given(/^a user at google$/, async function () {
  await googlePage.open("/");
  await expect(await browser.getTitle()).to.equal("Google");
  // browser.pause(1000);
});

// Sauce labs demo page
Given("a user at {string} login page", async function (websiteName) {
  cont += 1;

  if ((await browser.getUrl()).includes("inventory.html")) {
    // Do logout for each example in the scenario outline, need to start from the login page
    sauceLabHomePage.doLogout();
    expect(browser).toHaveTitle(websiteName);
  } else {
    await sauceLabLoginPage.open("https://www.saucedemo.com");
    expect(browser).toHaveTitle(websiteName);
    if (cont == 1) {
      await percySnapshot(browser, "login page");
      if (cont == 2) {
        //resetear contador
        cont = 0;
      }
    }
    await sauceLabLoginPage.usernameInput.waitForClickable();
    await sauceLabLoginPage.passwordInput.waitForClickable();
    await sauceLabLoginPage.loginButton.waitForClickable();
  }
});
