$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login in with valid credentials",
  "description": "",
  "id": "login-in-with-valid-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-in-with-valid-credentials;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login-1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 7278969900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4617314099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 386797600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 14114639300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 5093674000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Logout_link()"
});
formatter.result({
  "duration": 4912114700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 5035121499,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 621695301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-with-valid-credentials;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@login-2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-in-with-valid-credentials;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login-in-with-valid-credentials;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "login-in-with-valid-credentials;login-data-driven;;2"
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "admin1"
      ],
      "line": 27,
      "id": "login-in-with-valid-credentials;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-with-valid-credentials;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@login-2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3174014900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4798768500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 351211400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 14319768400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 5049841799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Logout_link()"
});
formatter.result({
  "duration": 5455234499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 5031712300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 729266200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login Data Driven",
  "description": "",
  "id": "login-in-with-valid-credentials;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 14,
      "name": "@login-2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin1@yourstore.com\" and Password as \"admin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3909851499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4473941200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin1",
      "offset": 61
    }
  ],
  "location": "LoginSteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 379712000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_Login()"
});
formatter.result({
  "duration": 5530404001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 192816400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.LoginSteps.page_Title_should_be(LoginSteps.java:57)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});