const SELECTORS = {

    LOGIN_BUTTON: '#loginButton',
    EMAIL_INPUT: '#email-input',
    PASSWORD_INPUT: '#password-input',
    SEARCH:'#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'

}

class LoginPage {

    get loginButton() {
        return $(SELECTORS.LOGIN_BUTTON)
    }
    get EmailInput() {
        return $(SELECTORS.EMAIL_INPUT)
    }
    get PasswordInput() {
        return $(SELECTORS.PASSWORD_INPUT)
    }

    get Search() {
        return $(SELECTORS.SEARCH)
    }
    SearchAssertion()
    {
        expect(this.Search.isExisting()).to.be.true
        
    }

    Searchaction()
    {
        this.Search.setValue('Hello iconic')
        browser.keys('Enter'); 

    }
    LoginAssertions() {
        this.loginButton.waitForDisplayed(undefined)
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