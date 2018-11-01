$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SSTest_FlightBooking.feature");
formatter.feature({
  "line": 1,
  "name": "To search and Book flight from SkyScanner Web Portal",
  "description": "",
  "id": "to-search-and-book-flight-from-skyscanner-web-portal",
  "keyword": "Feature"
});
formatter.uri("SSTest_UserProfile.feature");
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
  "name": "open \"https://www.skyscanner.com.sg/\" in \"CH\"",
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
      "val": "CH",
      "offset": 42
    }
  ],
  "location": "SSUserProfileTestDef.open_Url(String,String)"
});
formatter.result({
  "duration": 11773238675,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
formatter.result({
  "duration": 4476874615,
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
  "duration": 475870400,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Login_Success_Message(DataTable)"
});
formatter.result({
  "duration": 8971434323,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Logout of Skyscanner",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal;logout-of-skyscanner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Already Logged In",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Sign Out Button Is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Verify Successful Logout",
  "rows": [
    {
      "cells": [
        "Log in"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SSUserProfileTestDef.already_Logged_In()"
});
formatter.result({
  "duration": 3855005684,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.click_Logout()"
});
formatter.result({
  "duration": 926183428,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Successful_Logout(DataTable)"
});
formatter.result({
  "duration": 3193439834,
  "status": "passed"
});
formatter.after({
  "duration": 4877142643,
  "status": "passed"
});
});