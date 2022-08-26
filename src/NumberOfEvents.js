import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {                                    
        eventCounts: 32
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        if (event.target.value > 32) {
            this.setState({
                eventCounts: 32,
                errorText: 'You can not Select Number greater than 32',
            })

        }else if (event.target.value < 1) {
              this.setState({
                  eventCounts: 1,
                  errorText: 'You can not Select Number less than 1',
              })   
              value= 1
        }else
            this.setState({
               eventCounts: value,
               errorText: '',
            });
            this.props.updateEvents(undefined, value); 
        }


      render() {
        return (
          <div className="event-count-search">
            <p className="Alert">
              <ErrorAlert text={this.state.errorText} />
            </p> 
            <label id="eventCount">Count : </label>
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