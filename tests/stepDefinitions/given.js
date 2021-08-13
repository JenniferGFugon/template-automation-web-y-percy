const { Given } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')

Given(/^a user at google$/, function () {
  googlePage.open('/')
  expect(browser.getTitle()).to.equal('Google');
  // browser.pause(1000);
})
 