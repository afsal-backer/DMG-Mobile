class PaywallPage {

    //selectors

    get signInButton() { return $('//*[@text="Sign in" and @class="android.widget.TextView"]'); }
    

    //Helper functions


    async clickSignInButton() {
        await expect(this.signInButton).toBeDisplayed({ wait: 20000 });
        await this.signInButton.click();
        await browser.pause(3000);
    }


}
export default new PaywallPage();