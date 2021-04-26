import PortalPage from "./portal.page";

class ChallangePage extends PortalPage {

    get sectionHeader() { return $('div.h1'); }

    open() {
        return super.open('/challenge');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/challenge');
        expect(this.sectionHeader).toHaveText('Challenges');
    }

}

export default new ChallangePage();