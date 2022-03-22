Feature: Cart Test

    As a user with the template of web-automation
    I want to add products to the shopping cart
    so that I can continue with the checkout.

    # Establecer los givens de estos escenarios a que el user este ubicado en la pantalla de Shopping Cart
    Background:
        Given a user at "Swag Labs" login page
    
    # Estos son escenarios de Homepage
    # Deberiamos tener una feature para ellos junto con su page object model
    Scenario Outline:Add items to the shopping cart-HP
        Given a user at "Swag Labs" home page
        When the user clicks on the add to cart button of  the first product
        And the user clicks on the add to cart button of  the second product
        Then the product is added to  the shopping cart
        And the shopping cart icon increment.

    # Estos son escenarios de Homepage
    # Deberiamos tener una feature para ellos junto con su page object model
    Scenario Outline:Product is not added to the shopping cart_SP
        Given a user at "Swag Labs" home page
        When the user clicks to add the first product        
        And the user clicks to add the second product
        Then the product is not added

    Scenario:Complete checkout-HP
        Given a user at "Swag Labs" checkout page
        When the user clicks the checkout button
        And the user types "jennifer" in the the firstname input
        And the user types "guerrero" in the the lastname input
        And the user types "12111" in the the postal code input
        And the user clicks on continue button
        And the user clicks on finish button
        Then the user  should see "CHECKOUT: COMPLETE!" message 

    # Adaptarlo a escenario normal
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


            

       