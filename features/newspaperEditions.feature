Feature: Newspaper Edition Download

  Scenario: Verify the Newspaper edition is downloadable
    Given I launch the app and navigate through the onboarding
    When I click on the newspaper tab
    And I scroll to "Recent issues" and click on "See More" button
    And I download the "30 November 2023" edition from the Archive Tab
    And I sign in on the paywall page
    Then The download of "30 November 2023" should complete

  Scenario: Verify the Images on Gallery section
    Given I open the downloaded editon  
    When Navigate to page 3 of the editon
    And I open the gallery and swipe through the images
    Then I close gallery and ALB view is opened