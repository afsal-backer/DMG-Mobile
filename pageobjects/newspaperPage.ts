class NewspaperPage {

    //selectors

    get newspaperTab() { return $('//android.widget.Button[@content-desc="Newspaper"]'); }
    get seeMoreButton() { return $('//android.widget.TextView[@text="SEE MORE"]'); }

    //Helper functions    
}
export default new NewspaperPage();