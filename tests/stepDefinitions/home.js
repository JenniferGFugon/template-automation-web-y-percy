const { Given, When, Then } = require('cucumber');

// @freeFormOnboarding.welcomeScreen.HP
Given(/^as a user with the focus in the Navbar in Home$/, function () {
  console.log(browser.url("/"))
  browser.pause(20000);
})
When(/^user scrolls vertical or horizontal$/, function () {
  console.log("there!")
})
Then(/^Scrolling works smoothly and infinite$/, function () {
})