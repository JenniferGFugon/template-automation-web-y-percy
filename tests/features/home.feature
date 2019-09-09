
Feature: Disney test

    As a user with the freeform app installed for the first time
    I want to scroll down or scroll up
    So that I can go through the several multimedia categories

    @freeForm.General.Navigation.HP
    Scenario: Freeform OTT navigation
        Given as a user with the focus in the Navbar in Home
        When user scrolls vertical or horizontal
        Then Scrolling works smoothly and infinite