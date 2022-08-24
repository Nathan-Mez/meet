
import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';


class App extends Component {

  state = {
    events: [],
    locations: [],
    eventNumbers: 32,
    locationSelected: 'All Locations'
  }


  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });

    if (navigator.onLine) {
      this.setState({
        offlineText: ''
      });
    } else {
      this.setState({
        offlineText: 'YOU ARE OFFLINE, CONNECT TO THE INTERNET TO GET UPDATED RESUALT.'
      })
    }
  }
  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.eventNumbers;
   } else(
      this.setState({ eventNumbers: eventCount })
   )
    if (location === undefined) {
      location = this.state.locationSelected;
   }
    getEvents().then((events) => {
      const locationEvents = (location === 'All Locations') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        eventNumbers: eventCount,
        locationSelected: location,
      });
    });
  }


  

  
  render() {
    return (
      <div className="App">
        <p className="Alert">
          <OfflineAlert text={this.state.offlineText} />
        </p>  
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />        
          <NumberOfEvents eventCounts={this.state.eventNumbers} updateEvents = { this.updateEvents } />        
        <EventList events={this.state.events} />           
      </div>
    );
  }
}

export default App;
