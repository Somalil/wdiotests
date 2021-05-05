export default class Page {
    open (path) {
        return browser.url(path)
    }

    async clearInput(element){
        const value = element.getValue()
        for (let i = 0; i < element.length; i++)
            await element.keys(['Backspace'])
    }
}
