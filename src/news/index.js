import React, { Component } from 'react';
import AdSense from './../adsens';

class News extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to News</h1>
        <div className="App-intro">
          <AdSense />
        </div>
      </div>
    );
  }
}

export default News;
