import androidUtils from '../utils/android/androidUtils';
class OnboardingPage {

    //selectors

    get continueButton() {return $('(//android.widget.FrameLayout[contains(@resource-id, "content")]//android.view.ViewGroup[1])[14]');}

    
    //Helper functions

    async navigateThroughOnboarding() {
        for (let i = 1; i <= 5; i++) {
            try {
                await this.continueButton.waitForDisplayed({ timeout: 30000 });
                await androidUtils.handleCloseFailoverPopup();
                await this.continueButton.click();
                await browser.pause(1000);
            } catch (error) {
                console.error(`Error clicking onboarding button ${i}:`, error);
                throw error;
            }
        }
    }
}
export default new OnboardingPage();