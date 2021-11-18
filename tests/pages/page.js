
class Page {

    async open (path) {
        return browser.url(path)
    }
}
module.exports = Page;