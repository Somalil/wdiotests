import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('should login with valid data', async () => {
        await LoginPage.setLogin(process.env.LOGIN);
        await LoginPage.setPassword(process.env.PASSWORD);
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
        const text = await (await $('h1')).getText()
    });

    it('submit button is disabled if login and password are absent', async () => {
        await LoginPage.isSubmitButtonDisabled();
    });

    it('fails if invalid data provided', async () => {
        await LoginPage.setLogin('ex@ex.com');
        await LoginPage.setPassword('321321');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppeared();
    });

    it('Login input is required', async () => {
        await LoginPage.setPassword();
        await LoginPage.isSubmitButtonDisabled();
    });

});


