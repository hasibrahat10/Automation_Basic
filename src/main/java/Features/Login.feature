@login
Feature: Login in ThisHeart Application
  @login-1
  Scenario: Successful login with valid credentials
    Given User Launch Chrome browser
    When User opens URL "https://thisheart.co/login"
    And users enters Email as "demot@yopmail.com" and Password as "hasib12345;;"
    And Click on Login
    Then Page title should be "ThisHeart - Enroll Authentication"
    And Close Browser

  @login-2
  Scenario Outline: Login Data Driven
    Given User Launch Chrome browser
    When User opens URL "https://thisheart.co/login"
    And users enters Email as "<username>" and Password as "<password>"
    And Click on Login
    Then Page title should be "ThisHeart - Enroll Authentication"
    And Close Browser
    Examples:
      | username | password |
      | demot@yopmail.com  |  hasib12345;; |
      | demot1@yopmail.com |  hasib12345   |
