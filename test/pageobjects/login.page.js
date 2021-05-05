import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get loginButton () { return $('[data-qa=\'login\']'); }

    async open () {
        return super.open('/user/login');
    }

    async setLogin (email) {
        return (await this.inputUsername).setValue(email);
    }

    async setPassword (password) {
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton() {
        (await this.buttonSubmit).click();
    }

    async isSubmitButtonDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    async errorToastAppeared() {
        return expect(await this.errorToast).toBeDisplayed();
    }
}

export default new LoginPage();
