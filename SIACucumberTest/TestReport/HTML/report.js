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
  "duration": 8481276349,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
formatter.result({
  "duration": 4461295454,
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
  "duration": 498205912,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Login_Success_Message(DataTable)"
});
formatter.result({
  "duration": 8116907852,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Add Traveller details to Skyscanner login Account",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal;add-traveller-details-to-skyscanner-login-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Already User Profile Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Add a traveller button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Personal Details are entered",
  "rows": [
    {
      "cells": [
        "Mr.",
        "Thomas",
        "Mathew",
        "Male",
        "00001111"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Save Traveller is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Added Traveller details \"Thomas Mathew\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SSUserProfileTestDef.already_User_Profile()"
});
formatter.result({
  "duration": 34086890,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Add_Traveller()"
});
formatter.result({
  "duration": 97098274,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.enter_personal_Details(DataTable)"
});
formatter.result({
  "duration": 3410515055,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.save_Traveller()"
});
formatter.result({
  "duration": 1606930036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thomas Mathew",
      "offset": 32
    }
  ],
  "location": "SSUserProfileTestDef.verify_Travelleradded(String)"
});
formatter.result({
  "duration": 64709946,
  "status": "passed"
});
formatter.after({
  "duration": 856249506,
  "status": "passed"
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
  "duration": 11307107274,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
formatter.result({
  "duration": 5084291364,
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
  "duration": 468101938,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Login_Success_Message(DataTable)"
});
formatter.result({
  "duration": 10547183143,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Delete Traveller details from Skyscanner login Account",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal;delete-traveller-details-from-skyscanner-login-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Already User Profile Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Traveller Details are opened",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Delete button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify Successful deletion of traveller \"Traveller deleted\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SSUserProfileTestDef.already_User_Profile()"
});
formatter.result({
  "duration": 32873857,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.travel_Details_are_opened()"
});
formatter.result({
  "duration": 111965721,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.delete_button_is_clicked()"
});
formatter.result({
  "duration": 1296196296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Traveller deleted",
      "offset": 41
    }
  ],
  "location": "SSUserProfileTestDef.successful_Deletion(String)"
});
formatter.result({
  "duration": 828428703,
  "status": "passed"
});
formatter.after({
  "duration": 917762857,
  "status": "passed"
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
  "duration": 7516359165,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.clcik_Login()"
});
formatter.result({
  "duration": 2754756603,
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
  "duration": 517709172,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Login_Success_Message(DataTable)"
});
formatter.result({
  "duration": 11225405397,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Logout of Skyscanner",
  "description": "",
  "id": "to-test-basic-functionality-of-skyscanner-web-portal;logout-of-skyscanner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Already Logged In",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Sign Out Button Is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Verify Successful Logout",
  "rows": [
    {
      "cells": [
        "Log in"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SSUserProfileTestDef.already_Logged_In()"
});
formatter.result({
  "duration": 4120635372,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.click_Logout()"
});
formatter.result({
  "duration": 4796615509,
  "status": "passed"
});
formatter.match({
  "location": "SSUserProfileTestDef.verify_Successful_Logout(DataTable)"
});
formatter.result({
  "duration": 5525984478,
  "status": "passed"
});
formatter.after({
  "duration": 762649803,
  "status": "passed"
});
});