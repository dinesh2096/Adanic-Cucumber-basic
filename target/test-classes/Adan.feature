Feature: Adanic page testing
Scenario Outline: verfiy the all the process in flowing correctly
Given user enter the page
When user enter the data"<user>" and "<password>"
And user click on the login
And user select the location
And User select the Hotels
And User select the Room Type
And user select the No.of Rooms
And check in date
And Check out date
And Adults per room 
And Children per room 
And search the hotel
And button to continue
And click continue
And user enter the FirstName"<Firstname>"
And user enter the LastName"<Lastname>"
And user enter the address"<address>"
And enter the CC"<ccno>"
And user select the CC type
And user select the Expiry date
And user select the Expiry year
And user enter the CVV number"<cvvnumber>"
And click the book process
And cancellation step
And first step of cancellation
And second step of cancellation 
Then page to be displayed
And logout the account
And quit the browser
Examples:
|user||password|        |Firstname|Lastname|address|ccno|cvvnumber|
|dineshaltier||6GRW48|  |dinesh|G|N0.12/23 XYZ address chennai|4111111111111110|123|



