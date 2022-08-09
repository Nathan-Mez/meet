
import React, { Component } from "react";

class Event extends Component {

  state = { show: false };  

  toggleVisibility = () => {
    this.setState((currentState) => ({show: !currentState.show}));
  };

 
  render() {
    const { event } = this.props;
    var buttonText = this.state.show ? "Hide Details" : "Show Details";

    return <div className="event">
              <h1 className="event-title">{event.summary}</h1>
              <p className="event-overview">{event.start.dateTime} {event.start.timeZone} {event.location} +"event is: "+ {event.status} </p>

              {this.state.show && 
                 <div className='show-details'>
                   <h2 className="event-about-event">About event:</h2>
                   <a className="event-htmlLink" href={event.htmlLink} target="_blank">See details on Google Calendar</a>
                   <p className="event-description">{event.description}</p> 
                 </div>
               }

                <button className="show-hide-Details-button" onClick={this.toggleVisibility} >{buttonText}</button>
                
            </div>;
  }
}
export default Event;