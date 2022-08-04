# Meet
### Overview
Meet is a React app that provides information on events held worlwide. Some of its features include: It can be used offline, User can get recommendation filter upon typing on search box and View a chart showing the number of upcoming events by city.

### Features
#### Feature 1
As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
- **Scenario 1:**  When user hasn't searched for a city, show upcoming events form all cities.
   - Given the user hasn't searched for a city, When the user opens the app, Then the user should see a list of all upcoming events.
- **Scenario 2:** User should see a list of suggestions when they search for a city.
   - Given the main page is open, When user starts typing in the city textbox, Then the user should see a list of cities (suggestions) that match what they’ve typed. 
- **Scenario 3:** User can select a city from the suggested list.
   - Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing, When the user selects a city (e.g., “Berlin, Germany”) from the list, Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city.  
#### Feature 2
As a user, I should be able to show/hide event details so that I can can see more or less information about an event without being overwhelmed by clutter.
- **Scenario 1:**  The event element stays collapsed by default.
   - Given the user has opened a page, When the user doesn't select an event, Then the events element stays collapsed.
- **Scenario 2:**  The user can exapand event to see details.
   - Given the user wants more details on a particular event, When the user select that event, Then the details on that event are displayed.
- **Scenario 3:**  User can collapse an event to hide its details.
   - Given the user has opened an event details element, When the user select that event, Then the event element get collapsed.   
#### Feature 3
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- **Scenario 1:**  When user hasn’t specified a number, 32 is the default number.
   - Given the user hasn't specified a number of events to view, When the user uses the app, Then by default the number of events shown should be 32.
- **Scenario 2:**  User can change the number of events they want to see.
   - Given the user wants a particular number of events shown on a page, When the user uses the app, Then the user specified number of events will be displayed.  
#### Feature 4
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- **Scenario 1:**  Show cached data when there’s no internet connection.
   - Given the user does not have internet connection, When the user want to use the app, Then the app should display cached data.
- **Scenario 2:**  Show error when user changes the settings (city, time range).
   - Given the user does not have internet connection, When the user changes settings, Then an error message should be displayed.  
#### Feature 5
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
- **Scenario 1:**  Show a chart with the number of upcoming events in each city.
   - Given the user is on main page, When the user does not put specificaions, Then the user should see a chart of upcoming events.   

