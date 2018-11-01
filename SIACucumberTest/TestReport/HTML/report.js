$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SSTest_UserProfile.feature");
formatter.feature({
  "line": 1,
  "name": "To Test Basic Functionality of Skyscanner Web Portal",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Given Url and user id/Password Login into Skyscanner",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "open \"https://www.skyscanner.com.sg/\" in \"IE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Log-In Button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"rahulrai0501@gmail.com\" and \"March@2018\" is entered",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify Login Success Message",
  "rows": [
    {
      "cells": [
        "Hi there!"
      ],
      "line": 9
    },
    {
      "cells": [
        "rahulrai0501@gmail.com"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.skyscanner.com.sg/",
      "offset": 6
    },
    {
      "val": "IE",
      "offset": 42
    }
  ],
  "location": "SSUserProfileTestDef.open_Url(String,String)"
});
formatter.result({
  "duration": 2774080258,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
