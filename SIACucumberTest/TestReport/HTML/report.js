$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SIATest.feature");
formatter.feature({
  "line": 1,
  "name": "To Test Basic Functionality of Singapore Airlines Web Portal",
  "description": "",
  "id": "to-test-basic-functionality-of-singapore-airlines-web-portal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Given Url and user id/Password Login into Singapore Airlines",
  "description": "",
  "id": "to-test-basic-functionality-of-singapore-airlines-web-portal;given-url-and-user-id/password-login-into-singapore-airlines",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open \"https://www.skyscanner.com.sg/\" in \"Chrome\"",
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
        "My Account"
      ],
      "line": 8
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
      "val": "Chrome",
      "offset": 42
    }
  ],
  "location": "SIATestDef.open_Url(String,String)"
});
formatter.result({
  "duration": 9824913947,
  "status": "passed"
});
formatter.match({
  "location": "SIATestDef.clcik_Login()"
});
formatter.result({
  "duration": 169969447,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-V5LUFH5\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\Pactera\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 866bd66051bf7d5653bcb48dd9f05880\n*** Element info: {Using\u003dclass name, value\u003dLog in}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat sia.cucumber.test.SIATestDef.clcik_Login(SIATestDef.java:42)\r\n\tat ✽.When Log-In Button is clicked(SIATest.feature:5)\r\n",
  "status": "failed"
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
  "location": "SIATestDef.and_is_entered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIATestDef.verify_Login_Success_Message(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Logout of Singapore Airlines",
  "description": "",
  "id": "to-test-basic-functionality-of-singapore-airlines-web-portal;logout-of-singapore-airlines",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Already Logged In",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Sign Out Button Is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify Successful Logout",
  "rows": [
    {
      "cells": [
        "Log-in"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SIATestDef.already_Logged_In()"
});
formatter.result({
  "duration": 8208991,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat sia.cucumber.test.SIATestDef.already_Logged_In(SIATestDef.java:65)\r\n\tat ✽.Given Already Logged In(SIATest.feature:11)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "SIATestDef.sign_Out_Button_Is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SIATestDef.verify_Successful_Logout(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});