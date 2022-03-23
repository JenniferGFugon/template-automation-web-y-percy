Feature: Cart Test

    As a user with the template of web-automation
    I want to continue with the checkout
    so that I can finish with the checkout.

    
    Scenario:Complete checkout-HP
        # Validar en este Given que el carrito incremento de items estando en Homepage
        Given a user at "Swag Labs" checkout page
        # Validar en este When que tenemos agregados items ya estando en el checkout page
        # antes de hacerle click al checkout button
        When the user clicks the checkout button
        And the user types "jennifer" in the the firstname input
        And the user types "guerrero" in the the lastname input
        And the user types "12111" in the the postal code input
        And the user clicks on continue button
        And the user clicks on finish button
        Then the user  should see "CHECKOUT: COMPLETE!" message 

    
    Scenario:The postal code is missing in the checkout-SP
        Given a user at "Swag Labs" checkout page
        When the user clicks the checkout button
        And the user types "jennifer" in the the firstname input
        And the user types "guerrero" in the the lastname input
        And the user clicks on continue button
        Then the user  should see "Error: Postal Code is required " message


            

       