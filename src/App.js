
import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


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
        offlineText: 'YOU ARE CURRENTLY OFFLINE, CONNECT TO THE INTERNET TO GET UPDATED RESAULT.'
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };
  


  render() {
    const { locations, numberOfEvents, offlineText } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <p className="Alert">
          <OfflineAlert text={offlineText} />
        </p>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />       
         <h4>Events in each city</h4>
         <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}



export default App;
