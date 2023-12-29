class SignInPage {

    //selectors

    get userNameField() { return $('//android.widget.EditText[@resource-id="login.email"]'); }
    get passwordField() { return $('//android.widget.EditText[@resource-id="login.password"]'); }
    get signInButton() { return $('//android.widget.Button[@text="Sign in"]'); }


    //Helper functions

    async assertSignInPageOpened() {
        const timeout = 20000; // Timeout in milliseconds
        const pollingInterval = 1000; // Check every 2 seconds
        await browser.waitUntil(async () => {
            return this.userNameField.isDisplayed();
        }, { timeout, interval: pollingInterval, timeoutMsg: "Sign-in form not displayed after 20s" });
    }

    async enterCredentialsAndLogIn(username: string, password: string) {
        await this.userNameField.waitUntil(async () => {
            return await this.userNameField.isDisplayed();
        }, {
            timeout: 20000,
            timeoutMsg: 'Expected username field be displayed after 10s.'
        });
        await this.userNameField.setValue(username);
        await browser.pause(1000);
        await this.passwordField.setValue(password);
        await browser.pause(1000);
        await this.signInButton.click();
        await browser.pause(5000);
    }

}
export default new SignInPage();

