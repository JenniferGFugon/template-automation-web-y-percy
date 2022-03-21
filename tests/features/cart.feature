Feature: Cart Test

    As a user with the template of web-automation
    I want to add products to the shopping cart
    so that I can continue with the checkout.

    Background:
        Given a user at "Swag Labs" login page
    
    Scenario Outline:Add items to the shopping cart-HP
        Given a user at "Swag Labs" home page
        When the user clicks on the add to cart button of  the first product
        And the user clicks on the add to cart button of  the second product
        Then the product is added to  the shopping cart
        And the shopping cart icon increment.

    Scenario Outline:Product is not added to the shopping cart_SP
        Given a user at "Swag Labs" home page
        When the user clicks to add the first product        
        And the user clicks to add the second product
        Then the product is not added

    Scenario Outline:Complete checkout-HP
        Given a user at "Swag Labs" checkout page
        When the user clicks the checkout button
        And the user types "<firstname>" in the the firstname input
        And the user types "<lastname>" in the the lastname input
        And the user types "<postal_code>" in the the postal code input
        And the user clicks on continue button
        And the user clicks on finish button
        Then the user  should see "<behavior>" message

        Examples:
            | firstname               | lastname    | postal_code  |  behavior                         |
            | jennifer                | guerrero    |  12111       |  CHECKOUT: COMPLETE!              |   

    Scenario Outline:The postal code is missing in the checkout-SP
        Given a user at "Swag Labs" checkout page
        When the user clicks the checkout button
        And the user types "<firstname>" in the the firstname input
        And the user types "<lastname>" in the the lastname input
        And the user clicks on continue button
        Then the user  should see "<behavior>" message

        Examples:
            | firstname               | lastname     |  behavior                         |
            | jennifer                | guerrero     |  Error: Postal Code is required   |  


            

       