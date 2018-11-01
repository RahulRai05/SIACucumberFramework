$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SSTest_UserProfile.feature");
formatter.feature({
  "line": 1,
  "name": "To Test Basic Functionality of Skyscanner Web Portal",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Given Url and user id/Password Login into Skyscanner",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "open \"https://www.skyscanner.com.sg/\" in \"CH\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Log-In Button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\"rahulrai0501@gmail.com\" and \"March@2018\" is entered",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Verify Login Success Message",
  "rows": [
    {
      "cells": [
        "Hi there!"
      ],
      "line": 8
    },
    {
      "cells": [
        "rahulrai0501@gmail.com"
      ],
      "line": 9
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
      "val": "CH",
      "offset": 42
    }
  ],
  "location": "SSUserProfileTestDef.open_Url(String,String)"
});
formatter.result({
  "duration": 7011546113,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
formatter.result({
  "duration": 1137667172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahulrai0501@gmail.com",
      "offset": 1
    },
    {
      "val": "March@2018",
      "offset": 30
    }
  ],
  "location": "SSUserProfileTestDef.and_is_entered(String,String)"
});
formatter.result({
  "duration": 775574345,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Login_Success_Message(DataTable)"
});
