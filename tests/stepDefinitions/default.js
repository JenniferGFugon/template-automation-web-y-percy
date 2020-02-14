const { Given, When, Then } = require('cucumber');
let loginPage = require('../pages/login.page.js')

// @freeFormOnboarding.welcomeScreen.HP
Given(/^a user that go to google$/, function () {
  browser.pause(20000);
  loginPage.LoginAssertions()
})
When(/^the page loads$/, function () {
  browser.pause(20000);
  console.log("The page loaded successfully if came to this step")
})
Then(/^be able to automate the site$/, function () {
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(20000)
})