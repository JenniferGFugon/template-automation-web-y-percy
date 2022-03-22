
Feature: Template Test

    As a user with the template of web-automation
    I want to create a feature file
    so that I can learn how to automate test cases in WebdriverIO

    @pending
    Scenario: Hello World for Testing
        Given a user at google
        And the page loads
        When the user type "Hello iconic"
        Then the user should see the hello iconic page searched and positioned as a first
        
    Scenario Outline: Sauce Labs Demo Page Login
        Given a user at "Swag Labs" login page
        When the user types "<user>" in the username input
        And the user types "<password>" in the password input
        And the user clicks the Login button
        Then the user "<user>" should see "<behavior>"

        Examples:
            | user                    | password     | behavior                                            |
            | standard_user           | secret_sauce | Login successfully                                  |
            | locked_out_user         | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
            | problem_user            | secret_sauce | Inventory item damaged                              |