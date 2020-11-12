Feature: ThisHeart Login
  Scenario: Logo presence in ThisHeart Application Home Page
    Given I launch 100 chrome browser
    When I open thisheart homepage
    Then I verify the logo present on the page
    And close browser
