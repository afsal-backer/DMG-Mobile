import AndroidUtils from '../utils/android/androidUtils';
class PdfViewPage {

    //selectors

    get closeGallery() { return $('//android.widget.TextView[@text="Close"]'); }
    get newsTab() { return $('//android.widget.TextView[@text="News"]'); }
    get articleLinearView() { return $('//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout'); }

    //Helper functions  
    
    async navigateToPage(articleName: string) {
        await this.newsTab.click();
        await browser.pause(2000);
        await this.articleLinearView.waitForDisplayed();
        await this.articleLinearView.click();
        await browser.pause(2000);
        await AndroidUtils.swipeUntilTextFound(articleName);      
    }

    async openGalleryAndSwipe(articleName: string, finalImageName: string) {
        await $(`//android.widget.Image[@text="${articleName }"]`).click();
        await browser.pause(2000);
        await $(`android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollTextIntoView("${finalImageName}")`);
    }

    async assertPdfViewOpen() {
        await expect($(`//android.widget.FrameLayout[@resource-id="android:id/content"]`)).toBeDisplayed({wait: 10000});
    }

    
}
export default new PdfViewPage();