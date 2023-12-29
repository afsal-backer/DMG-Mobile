import { Given, When, Then } from '@cucumber/cucumber';
import NewspaperPage from '../../pageobjects/newspaperPage';
import OnboardingPage from '../../pageobjects/onboardingPage';
import AllIssuesPage from '../../pageobjects/allIssuesPage';
import AndroidUtils from '../../utils/android/androidUtils';
import PaywallPage from '../../pageobjects/paywallPage';
import SignInPage from '../../pageobjects/signInPage';
import PdfViewPage from '../../pageobjects/pdfViewPage';
import 'dotenv/config';
import pdfViewPage from '../../pageobjects/pdfViewPage';

let username = process.env.MAIL_USERNAME || 'defaultUsername';
let password = process.env.MAIL_PASSWORD || 'defaultPassword';

Given('I launch the app and navigate through the onboarding', async function () {
    await OnboardingPage.navigateThroughOnboarding();
});

When('I click on the newspaper tab', async function () {
    await NewspaperPage.newspaperTab.click(); 
});

When('I scroll to "Recent issues" and click on "See More" button', async function () {
    await AndroidUtils.scrollVerticallyUntilElementFound('Recent issues');
    await AndroidUtils.scrollHorizontallyUntilElementFound('SEE MORE');
    await NewspaperPage.seeMoreButton.click(); 
});

When('I download the "30 November 2023" edition from the Archive Tab', async function () {
    await AllIssuesPage.openArchiveTab();
    await AndroidUtils.manualScroll(1, 'down');
    await AllIssuesPage.downloadSpecificEdition('30 November 2023');
});

When('I sign in on the paywall page', async function () {
    await PaywallPage.clickSignInButton();
    await SignInPage.assertSignInPageOpened();
    await SignInPage.enterCredentialsAndLogIn(username ,password);
});

Then('The download of "30 November 2023" should complete', async function () {
    await AllIssuesPage.exitReader();
    await AndroidUtils.manualScroll(2, 'down');
    await AllIssuesPage.assertDownloadCompleted('30 November 2023');
});


When('I open the downloaded editon', async function () {
    await AllIssuesPage.openEdition('30 November 2023');
});

When('Navigate to page 3 of the editon', async function () {
    await pdfViewPage.navigateToPage('Silver star: Beyonce in a platinum wig at premiere');
});

When('I open the gallery and swipe through the images', async function () {
    await pdfViewPage.openGalleryAndSwipe('Silver star: Beyonce in a platinum wig at premiere ', 'Starlet:');
});

Then('I close gallery and ALB view is opened', async function () {
    await PdfViewPage.closeGallery.click();
    await PdfViewPage.assertPdfViewOpen();
});




