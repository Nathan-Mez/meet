
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />              //city search test box displayed on App component
        <NumberOfEvents/>           //input box for the number of events user want displayed   
        <EventList />               //List of Events on EventList component displayed on App component
      </div>
    );
  }
}

export default App;
