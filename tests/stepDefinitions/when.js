const { When } = require('cucumber');
let loginPage = require('../pages/login.page.js')


When(/^the page loads$/, function () {
  browser.pause(2000);
  loginPage.SearchAssertion()
})
When(/^the user type Hello iconic$/, function () {
  loginPage.SearchText('Hello iconic')
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(2000)
})
 