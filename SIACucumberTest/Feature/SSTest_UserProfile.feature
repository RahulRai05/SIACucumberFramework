Feature: To Test Basic Functionality of Skyscanner Web Portal


Background: Given Url and user id/Password Login into Skyscanner
Given open "https://www.skyscanner.com.sg/" in "CH"
When Log-In Button is clicked
And "rahulrai0501@gmail.com" and "March@2018" is entered
Then Verify Login Success Message
|Hi there!|
|rahulrai0501@gmail.com|


Scenario: Add Traveller details to Skyscanner login Account
Given Already User Profile Page
When Add a traveller button is clicked
And Personal Details are entered
|Mr.|Thomas|Mathew|Male|00001111|
And Save Traveller is clicked
Then Verify Added Traveller details "Thomas Mathew"

Scenario: Delete Traveller details from Skyscanner login Account
Given Already User Profile Page
When Traveller Details are opened
And Delete button is clicked
Then Verify Successful deletion of traveller "Traveller deleted"

Scenario: Logout of Skyscanner
Given Already Logged In
When Sign Out Button Is clicked
Then Verify Successful Logout
|Log in|
