Feature: Show/hide event details

Scenario: The event element stays collapsed by default.
Given the user has opened a page
When the user does not select an event
Then the events element stays collapsed

Scenario: The user can exapand event to see details.
Given the user wants more details on a particular event
When the user select that event
Then the details on that event are displayed

Scenario: User can collapse an event to hide its details.
Given the user has opened an event details element
When the user select that event
Then the event element get collapsed