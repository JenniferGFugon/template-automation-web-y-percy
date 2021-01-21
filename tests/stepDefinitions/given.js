const { Given } = require('cucumber');
let loginPage = require('../pages/login.page.js')

Given(/^a user that go to google$/, function () {
  browser.pause(2000);
  // loginPage.LoginAssertions()
})
 