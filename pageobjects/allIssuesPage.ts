import AndroidUtils from '../utils/android/androidUtils';
class AllIssuesPage {

    //selectors

    get archiveTab() { return $('//android.widget.TextView[@text="Archive"]'); }

    //Helper functions

    async openArchiveTab() {
        await browser.pause(2000);
        await this.archiveTab.waitForDisplayed({ timeout: 10000 });
        await this.archiveTab.click();
        await browser.pause(2000);
    }

    async assertEditionPresent(date: string) {
        await expect($(`//android.widget.TextView[@text="${date}"]`)).toBeDisplayed({ wait: 20000 });
    }

    async downloadSpecificEdition(date: string) {
        await $(`//android.widget.TextView[@text="${date}"]/following-sibling::android.view.ViewGroup/android.view.ViewGroup`).click();
    }

    async assertDownloadCompleted(date: string) {
        await $(`//android.widget.TextView[@text="${date}"]/following-sibling::android.view.ViewGroup/android.view.ViewGroup`).waitForDisplayed({ reverse: true , timeout: 20000})
    }

    async exitReader() {
        await AndroidUtils.handleCloseFailoverPopup();
        await $(`//android.view.ViewGroup[@content-desc="Tap me to get out of the reader"]/android.view.ViewGroup`).waitForDisplayed({ timeout: 20000});
        (await $(`//android.view.ViewGroup[@content-desc="Tap me to get out of the reader"]/android.view.ViewGroup`)).click();
    }

    async openEdition(editionName: string) {
        await $(`//android.widget.TextView[@text="${editionName}"]`).click();
        await browser.pause(2000);
    }

}
export default new AllIssuesPage();