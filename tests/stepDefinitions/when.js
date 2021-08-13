const { When } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')


When(/^the page loads$/, function () {
  googlePage.SearchInput.waitForDisplayed();
})

When('the user type {string}', function (keyword) {
  googlePage.SearchText(keyword)
  browser.pause(1000)
})
 