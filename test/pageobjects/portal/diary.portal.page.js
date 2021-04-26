import PortalPage from "./portal.page";

class DiaryPage extends PortalPage {

    get sectionHeader() { return $('section > div > h1'); }

    open() {
        return super.open('/diary');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/diary');
        expect(this.sectionHeader).toHaveText('Daily reports');
    }
}

export default new DiaryPage();