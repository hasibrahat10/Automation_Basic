@login
Feature: Login in with valid credentials
  @login-1
  Scenario: Successful login with valid credentials
    Given User Launch Chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Logout link
    Then Page Title should be "Your store. Login"
    And Close Browser

  @login-2
  Scenario Outline: Login Data Driven
    Given User Launch Chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Logout link
    Then Page Title should be "Your store. Login"
    And Close Browser
    Examples:
      | email                 | password  |
      | admin@yourstore.com   |  admin    |
      | admin1@yourstore.com  |  admin1   |
