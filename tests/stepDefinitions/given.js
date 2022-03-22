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
  // 1. Hacer uso de la base url en el config file
  // Establecer: "https://www.saucedemo.com" como base url
  // mandar a llamar al metodo de open de esta forma: await sauceLabHomePage.open("/");
  // asi WDIO toma la base url por defecto y hace el llamado
  await sauceLabHomePage.open("/");
  expect(await sauceLabLoginPage.Login());
  
  // 2. Mejor utilizar los metodos de WaitForDisplayed del framework
  // asi esperamos a que esos elementos esten visibles para el usuario y continuar con las pruebas
  // Con el browser.pause puede que los elementos se tarden en cargar un poco mas que el tiempo que se le indica 
  await browser.pause(2000);
});
Given("a user at {string} checkout page", async function (websiteName) {
  // 3. Los mismos comentarios del given anterior aplican para este step
  await sauceLabLoginPage.open("https://www.saucedemo.com");
  
  // 4. Esta es una accion de usuario en vez de un assertion
  // Los assertions son una validacion despues de una accion, por lo tanto
  // no es necesario tener este expect, mandar a llamar este metodo normal: await sauceLabLoginPage.Login()
  expect(await sauceLabLoginPage.Login());
  await sauceLabCartPage.ClickFirstProduct();
  await sauceLabCartPage.ClickSecondProduct();
  await sauceLabCartPage.open("https://www.saucedemo.com/cart.html");
  await browser.pause(1000);
});
