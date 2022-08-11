
import React, { Component } from 'react';

class CitySearch extends Component {
    state = {                                     //define 'query' state on CitySearch Component
        query: '',
        suggestions: [],
        showSuggestions: undefined
      }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
          query: value,
          suggestions
        });
     };

     handleItemClicked = (suggestion) => {
      this.setState({
        query: suggestion,
        showSuggestions: false
      });
    
      this.props.updateEvents(suggestion);
    }

    render() {
        return (
          <div className="CitySearch">
            <input
              type="text"
              className="city-input"
              value={this.state.query}
              placeholder="Search for city"
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
                  <li onClick={() => this.handleItemClicked("all")}>
                    <b>See all cities</b>
                  </li>
           </ul>
          </div>
        );
    }
}

export default CitySearch;