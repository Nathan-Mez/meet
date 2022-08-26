import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      'font-weight' : 600,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}


class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = '#FFF';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'red';
    }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#FFF';
  }
}


  export { InfoAlert, ErrorAlert, OfflineAlert };