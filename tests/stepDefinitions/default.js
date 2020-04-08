const { Given, When, Then } = require('cucumber');
let loginPage = require('../pages/login.page.js')

// @freeFormOnboarding.welcomeScreen.HP
Given(/^a user that go to google$/, function () {
  browser.pause(5000);
  //loginPage.LoginAssertions()
})
When(/^the page loads$/, function () {
  browser.pause(5000);
  console.log("The page loaded successfully if came to this step")
  loginPage.SearchAssertion()
})
When(/^the user type Hello iconic$/, function () {
  loginPage.Searchaction()
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(5000)
})

Then(/^the user should see the hello iconic page searched and positioned as a first$/, function () {
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(5000)
})
 