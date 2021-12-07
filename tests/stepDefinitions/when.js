const { When } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')
const sauceLabLoginPage = require('../pages/sauceLab.login.page.js')

// Google website
When(/^the page loads$/, async function () {
  await googlePage.SearchInput.waitForDisplayed();
})

When('the user type {string}', async function (keyword) {
  await googlePage.SearchText(keyword)
  await browser.pause(1000)
})

// Sauce labs demo page
When('the user types {string} in the username input', async function (username) {
  await sauceLabLoginPage.SetUsername(username)
})
When('the user types {string} in the password input', async function (password) {
  await sauceLabLoginPage.SetPassword(password)
})
When(/^the user clicks the Login button$/, async function () {
  await sauceLabLoginPage.loginButton.click()
})
 