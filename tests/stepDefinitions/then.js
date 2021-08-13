const { Then } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')

Then(/^the user should see the hello iconic page searched and positioned as a first$/, function () {
  googlePage.SearchResult.waitForDisplayed()
  expect(googlePage.SearchResult.getText()).to.equal('Hello Iconic | Mobile / Web / OTT Applications');
})
 