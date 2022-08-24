
import React, { Component } from 'react';
import { InfoAlert } from './Alert';



class CitySearch extends Component {
    state = {                                     //define 'query' state on CitySearch Component
        query: '',
        suggestions: [],
        showSuggestions: undefined
      }


     handleInputChanged = (event) => {
      const value = event.target.value;
      this.setState({showSuggestions:true});
      const suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
      if (suggestions.length === 0) {
        this.setState({
          query: value,
          infoText: 'We can not find the city "' + value + '" on the Events list',
          suggestions : []
        });
      } else {
        return this.setState({
          query: value,
          suggestions,
          infoText:''
        });
      }
    };

    handleItemClicked = (suggestion) => {
      this.setState({
        query: suggestion,
        suggestions: [],
        showSuggestions: false,
        infoText: '',
      });
      this.props.updateEvents(suggestion, undefined);
    };

    render() {
        return (
          <div className="CitySearch">  
          <p className="Alert">
              <InfoAlert text={this.state.infoText} />
            </p>
            <input
              type="text"
              className="city-input"
              value={this.state.query}
              placeholder="Search for Locations"
              onChange={this.handleInputChanged}  //will detect whether any textual input have been made on input
              onFocus={() => { this.setState({ showSuggestions: true }) }}
            />
            <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
               {this.state.suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    onClick={() => this.handleItemClicked(suggestion)}
                    >{suggestion}</li>
                    ))}
                  <li onClick={() => this.handleItemClicked("All Locations")}>
                    <b>See all Locations</b>
                  </li>
           </ul>
          </div>
        );
    }
}

export default CitySearch;