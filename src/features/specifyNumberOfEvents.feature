Feature: Specify number of events displayed

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the user has not specified a number of events to view
When the user uses the app
Then by default the number of events shown should be 32

Scenario: User can change the number of events they want to see.
Given the user wants a particular number of events shown on a page
When the user changes the number of events to be displayed
Then the user specified number of events will be displayed