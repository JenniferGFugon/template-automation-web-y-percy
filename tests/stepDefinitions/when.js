const { When } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')


When(/^the page loads$/, async function () {
  await googlePage.SearchInput.waitForDisplayed();
})

When('the user type {string}', async function (keyword) {
  await googlePage.SearchText(keyword)
  await browser.pause(1000)
})
 