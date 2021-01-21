const { Then } = require('cucumber');
let loginPage = require('../pages/login.page.js')

Then(/^the user should see the hello iconic page searched and positioned as a first$/, function () {
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(3000)
})
 