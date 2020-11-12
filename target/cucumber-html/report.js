$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in ThisHeart Application",
  "description": "",
  "id": "login-in-thisheart-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-in-thisheart-application;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User opens URL \"https://thisheart.co/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "users enters Email as \"demot@yopmail.com\" and Password as \"hasib12345;;\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page title should be \"ThisHeart - Enroll Authentication\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 9396350500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://thisheart.co/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 82686989200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demot@yopmail.com",
      "offset": 23
    },
    {
      "val": "hasib12345;;",
      "offset": 59
    }
  ],
  "location": "LoginSteps.users_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 524866700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 5110953400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThisHeart - Enroll Authentication",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 5204108200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 985826000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-thisheart-application;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"https://thisheart.co/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "users enters Email as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Page title should be \"ThisHeart - Enroll Authentication\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-in-thisheart-application;login-data-driven;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-in-thisheart-application;login-data-driven;;1"
    },
    {
      "cells": [
        "demot@yopmail.com",
        "hasib12345;;"
      ],
      "line": 20,
      "id": "login-in-thisheart-application;login-data-driven;;2"
    },
    {
      "cells": [
        "demot1@yopmail.com",
        "hasib12345"
      ],
      "line": 21,
      "id": "login-in-thisheart-application;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-thisheart-application;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"https://thisheart.co/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "users enters Email as \"demot@yopmail.com\" and Password as \"hasib12345;;\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Page title should be \"ThisHeart - Enroll Authentication\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3676919400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://thisheart.co/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 95511518100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demot@yopmail.com",
      "offset": 23
    },
    {
      "val": "hasib12345;;",
      "offset": 59
    }
  ],
  "location": "LoginSteps.users_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 473833100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 5115884100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThisHeart - Enroll Authentication",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 5127049900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 888231400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-thisheart-application;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"https://thisheart.co/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "users enters Email as \"demot1@yopmail.com\" and Password as \"hasib12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Page title should be \"ThisHeart - Enroll Authentication\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3285423100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://thisheart.co/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 61454373300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demot1@yopmail.com",
      "offset": 23
    },
    {
      "val": "hasib12345",
      "offset": 60
    }
  ],
  "location": "LoginSteps.users_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 537394500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 5128908900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThisHeart - Enroll Authentication",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 288233500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.LoginSteps.page_title_should_be(LoginSteps.java:52)\r\n\tat ✽.Then Page title should be \"ThisHeart - Enroll Authentication\"(Login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ThisHeart.feature");
formatter.feature({
  "line": 1,
  "name": "ThisHeart Login",
  "description": "",
  "id": "thisheart-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Logo presence in ThisHeart Application Home Page",
  "description": "",
  "id": "thisheart-login;logo-presence-in-thisheart-application-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@kk"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I launch 100 chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I open thisheart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the logo present on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "ThisHeartsteps.i_launch_chrome_browser(int)"
});
formatter.result({
  "duration": 3594477200,
  "status": "passed"
});
formatter.match({
  "location": "ThisHeartsteps.i_open_thisheart_homepage()"
});
formatter.result({
  "duration": 115662573200,
  "status": "passed"
});
formatter.match({
  "location": "ThisHeartsteps.i_verify_the_logo_present_on_the_page()"
});
formatter.result({
  "duration": 173765900,
  "status": "passed"
});
formatter.match({
  "location": "ThisHeartsteps.close_browser()"
});
formatter.result({
  "duration": 1024675700,
  "status": "passed"
});
});