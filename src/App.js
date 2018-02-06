import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdSense from './adsens';
import News from './news';
import Market from './market';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      params: [],
    };
  }

  componentDidMount(nextProps) {
    const url = window.location.href;
    const params = url.split('/');

    // const regex = /[?&]([^=#]+)=([^&#]*)/g;
    // let match;
    // while(match = regex.exec(url)) {
    //   params[match[1]] = match[2];
    // }
    this.setState({ params });
  }
  render() {
    const { params } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {
            params.length && params[3] === 'news' &&
            <News />
          }
          {
            params.length && params[3] === 'market' &&
            <Market />
          }
        </div>
        <a href="./news">News </a>
        <a href="./market">Market</a>
      </div>
    );
  }
}

export default App;
