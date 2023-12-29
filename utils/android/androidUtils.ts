class AndroidUtils {

    //selectors

    get failoverPopUp() { return $('//android.widget.TextView[@text="Failover"]'); }
    get failoverCloseButton() { return $('//android.widget.TextView[@text="Failover"]/following-sibling::android.view.ViewGroup[@clickable="true"]'); }
    
    //Helper functions

    async scrollVerticallyUntilElementFound(text : string) {
        const textElement = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`);
        await expect(textElement).toExist();
    }

    async scrollVerticallyUntilTextFound(text : string) {
        await $(`android=new UiScrollable(new UiSelector()).setAsVerticalList().scrollTextIntoView("${text}")`);
    }

    async manualScroll(amountOfScrolls: number, direction: 'up' | 'down') {
        const size = await driver.getWindowRect();
        const startX = size.width / 2;
        const endX = startX;
        let startY, endY;
    
        if (direction === 'down') {
            startY = size.height * 0.8;
            endY = size.height * 0.2;
        } else { // direction === 'up'
            startY = size.height * 0.2;
            endY = size.height * 0.8;
        }
    
        for (let i = 0; i < amountOfScrolls; i++) {
            await driver.touchAction([
                { action: 'press', x: startX, y: startY },
                { action: 'wait', ms: 1000 },
                { action: 'moveTo', x: endX, y: endY },
                { action: 'release' }
            ]);
        }
    }
    
    async swipeUntilTextFound(textToFind : string) {
        await $(`android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollTextIntoView("${textToFind}")`);
        await browser.pause(2000);
    }

    async scrollHorizontallyUntilElementFound(text : string) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().text("${text}"))`);
    }

    async handleCloseFailoverPopup() {
        try {
            if (await this.failoverPopUp.isDisplayed()) {
                await this.failoverCloseButton.click();
            }
        } catch (error) {
            console.error('Failed to close failover popup:', error);
        }
    }
}



export default new AndroidUtils();