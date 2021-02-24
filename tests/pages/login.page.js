const SELECTORS = {

    LOGIN_BUTTON: '#loginButton',
    EMAIL_INPUT: '#email-input',
    PASSWORD_INPUT: '#password-input',
    SEARCH_INPUT:'input.gLFyf.gsfi'

}

class LoginPage {

    // Selector variables
    get loginButton() {
        return $(SELECTORS.LOGIN_BUTTON)
    }
    get EmailInput() {
        return $(SELECTORS.EMAIL_INPUT)
    }
    get PasswordInput() {
        return $(SELECTORS.PASSWORD_INPUT)
    }
    get SearchInput() {
        return $(SELECTORS.SEARCH_INPUT)
    }

    // Methods/Functions
    SearchAssertion(){
        expect(this.SearchInput.isDisplayed()).to.be.true
    }
    SearchText(textToSearch){
        this.SearchInput.setValue(textToSearch)
        browser.keys('Enter'); 
    }
    LoginAssertions() {
        this.loginButton.waitForDisplayed()
        expect(this.EmailInput.isExisting()).to.be.true
        expect(this.PasswordInput.isExisting()).to.be.true
    }
    SetEmail() {
        this.EmailInput.setValue('Email@email.com')
    }
    SetPassword() {
        this.PasswordInput.setValue('password')
    }
}

module.exports = new LoginPage()