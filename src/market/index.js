import React, { Component } from 'react';
import AdSense from './../adsens';

class Market extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Market</h1>
        <div className="App-intro">
          <AdSense />
        </div>
      </div>
    );
  }
}

export default Market;
