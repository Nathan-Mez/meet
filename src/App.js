
import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import MeetIcon from './favicon.png';


class App extends Component {

  state = {
    events: [],
    locations: [],
    eventNumbers: 32,
    locationSelected: 'All Locations',
    showWelcomeScreen: undefined,
  }


  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.eventNumbers),
            locations: extractLocations(events)
          });
        }
      });
    }
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
    const { events, locations, numberOfEvents, offlineText, showWelcomeScreen } = this.state;

    if (showWelcomeScreen === undefined) 
    return <div className="App" />

    return (
      <div className="App">
        <div className="Navigationbar">
           <img src={MeetIcon} alt="Meet App Icon" width="170px" className="meetIcon" ></img>
           <div className="Alert">
              <OfflineAlert text={offlineText} />
           </div>
           <div className="inputBar">
              <CitySearch updateEvents={this.updateEvents} locations={locations} />
              <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />  
           </div>
         </div>       
         <div className="data-vis-wrapper">
            <EventGenre events={events} />
            <ResponsiveContainer height={400} >
               <ScatterChart
                className='scatterChart'
                 margin={{
                   top: 30, right: 50, bottom: 30, left: 10,
                 }}>
                 <CartesianGrid />
                 <XAxis type="category" dataKey="city" name="city"/>
                 <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                 <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                 <Scatter data={this.getData()} fill="#6B89B3" />
               </ScatterChart>
           </ResponsiveContainer>
        </div>   
        <EventList events={events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}



export default App;
