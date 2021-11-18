const { Then } = require('@cucumber/cucumber');
const googlePage = require('../pages/google.page.js')

Then(/^the user should see the hello iconic page searched and positioned as a first$/, async function () {
  await googlePage.SearchResult.waitForDisplayed()
  await expect(await googlePage.SearchResult.getText()).to.equal('Hello Iconic | Fintech - Streaming - EdTech - Blockchain');
})
 