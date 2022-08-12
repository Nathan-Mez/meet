import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {                                    
        eventCounts: 32
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        if (event.target.value > 32) {
            this.setState({
                eventCounts: 32
            })

        }else if (event.target.value < 1) {
              this.setState({
                  eventCounts: 1
              })   
              value= 1
        }else
            this.setState({
               eventCounts: value
            });
            this.props.updateEvents(undefined, value); 
        }


      render() {
        return (
          <div className="event-count-search">
            <label>Event Count </label>
            <input
              type="number"
              className="event-count-input"
              value={this.state.eventCounts}
              onChange={this.handleInputChanged}                  //will detect whether any textual input have been made on input
            />
          </div>
        );
    }   

}      

export default NumberOfEvents;