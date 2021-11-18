const { Given } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')

Given(/^a user at google$/, async function () {
  await googlePage.open('/')
  await expect(await browser.getTitle()).to.equal('Google');
  // browser.pause(1000);
})
 