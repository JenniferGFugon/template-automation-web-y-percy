
// import Page from './page.js';
const Page = require("./page.js")

class GooglePage extends Page {

    // Selector variables
    get loginButton() {
        return $('#loginButton')
    }
    get EmailInput() {
        return $('#email-input')
    }
    get PasswordInput() {
        return $('#password-input')
    }
    get SearchInput() {
        return $('input.gLFyf.gsfi')
    }
    get SearchResult() {
        return $('.LC20lb.DKV0Md')
    }

    // Methods/Functions
    open(path) {
        return super.open(path);
    }
    SearchBoxAssertion(){
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

module.exports = new GooglePage();