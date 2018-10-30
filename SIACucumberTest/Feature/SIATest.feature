Feature: To Test Basic Functionality of Singapore Airlines Web Portal

Scenario: Given Url and user id/Password Login into Singapore Airlines
Given open "https://www.skyscanner.com.sg/" in "Chrome"
When Log-In Button is clicked
And "rahulrai0501@gmail.com" and "March@2018" is entered
Then Verify Login Success Message
|My Account|

Scenario: Logout of Singapore Airlines
Given Already Logged In
When Sign Out Button Is clicked
Then Verify Successful Logout
|Log-in|
