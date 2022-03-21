const { Then } = require("@cucumber/cucumber");
const googlePage = require("../pages/google.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");
const sauceLabCheckoutPage = require("../pages/sauceLab.checkout.page.js");
const sauceLabCartPage = require("../pages/sauceLab.cart.page.js");

// Google website
Then(
  /^the user should see the hello iconic page searched and positioned as a first$/,
  async function () {
    await googlePage.SearchResult.waitForDisplayed();
    await expect(await googlePage.SearchResult.getText()).to.equal(
      "Hello Iconic | Fintech - Streaming - EdTech - Blockchain"
    );
  }
);

// Sauce labs demo page
Then(
  "the user {string} should see {string}",
  async function (userType, message) {
    // Locked out user does not reach the homepage
    if (userType != "locked_out_user") {
      await sauceLabHomePage.inventoryListContainer.waitForDisplayed();
    }

    if (userType == "standard_user") {
      sauceLabHomePage.HeaderAssertions();
      // Number of items in the inventory list should be 6
      // Getting the total amount of items in the inventory list
      itemsAmount = await sauceLabHomePage.inventoryListContainer.$$(
        ".inventory_item"
      );
      expect(itemsAmount.length).toEqual(6);
    } else if (userType == "locked_out_user") {
      // This user should see an error message in the login page
      expect(sauceLabLoginPage.errorMessage).toHaveText(message);
    } else if (userType == "problem_user") {
      // This user should see the same image for every product in the inventory list on homepage
      // There is an atrribute (src) in the image of each inventory item that shows the same .jpg (sl-404.168b1cce.jpg) for each one
      sauceLabHomePage.inventoryList.forEach((element) => {
        inventoryItemImageSelector = element.$(".inventory_item_img > a > img");
        expect(inventoryItemImageSelector).toHaveAttributeContaining(
          "src",
          "sl-404.168b1cce.jpg"
        );
      });
    }
    await browser.pause(2000);
  }
);

//add products to shopping cart

Then("the product is added to  the shopping cart", async function () {
  expect(await sauceLabCartPage.removeProduct1).toHaveText("REMOVE");
  expect(await sauceLabCartPage.removeProduct2).toHaveText("REMOVE");
  await browser.pause(1000);
});

Then("the shopping cart icon increment.", async function () {
  expect(await sauceLabCartPage.shoppingCartBadge).toHaveText("2");
  await browser.pause(1000);
});

Then("the product is not added", async function () {
  expect(await sauceLabCartPage.product1).toHaveText("ADD TO CART");
  expect(await sauceLabCartPage.product2).toHaveText("ADD TO CART");
  await browser.pause(1000);
});

//checkout

Then("the user  should see {string} message", async function (behavior) {
  expect(await sauceLabCheckoutPage.spanTitle).toHaveText(behavior);
  await browser.pause(1000);
});
