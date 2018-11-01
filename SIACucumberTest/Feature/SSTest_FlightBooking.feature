Feature: To search and Book flight from SkyScanner Web Portal

@negative
Scenario Outline:To search flight for different Locations with valid user login
Given Open SkyScanner web url "https://www.skyscanner.com.sg/" in browser "CH"
When On "Flight" Booking Tab
And Flight Search Criteria <Trip Type> <From> <To> <Depart> <Return> <Cabin Class> and <Number of Traveller> is enterd
And Search flights is selected
Then List of available flight are listed
And First listed flight is selected
And First listed booking portal is opened
And Booking Portal is closed
Examples:
	| Trip Type   | From 	  |To    	|Depart	   |Return	  |Cabin Class|Number of Traveller| 
	| Return      | Singapore|Amsterdam|10/11/2018|26/11/2018|Economy	  |4				  |
	| One Way  	  | Singapore|Amsterdam|14/11/2018|26/11/2018|Economy	  |4				  |
	| Multi-city  | Singapore|Amsterdam|14/11/2018|26/11/2018|Economy	  |4				  |
	

