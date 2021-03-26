import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
        browser.refresh();
    });

    it('should login with valid data', () => {
        LoginPage.setLogin('mevibe8861@leonvero.com');
        LoginPage.setPassword('690844');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.isSubmitButtonDisabled();
    });

    it('fails if invalid data provided', () => {
        LoginPage.setLogin('ex@es.com');
        LoginPage.setPassword('12345235');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

});


