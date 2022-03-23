Feature: Home Test

    As a user with the template of web-automation
    I want to add products to the shopping cart
    so that I can continue with the checkout.

    
    Scenario:Add items to the shopping cart-HP
        Given a user at "Swag Labs" home page
        When the user clicks on the add to cart button of  the first product
        And the user clicks on the add to cart button of  the second product
        And the shopping cart icon increment.
        Then the product is added to  the shopping cart

    Scenario:Product is not added to the shopping cart_SP
        Given a user at "Swag Labs" home page
        When the user clicks to add the first product        
        And the user clicks to add the second product
        Then the product is not added to the shopping cart
