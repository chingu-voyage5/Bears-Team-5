import React from 'react';
import logo from '../../logo.svg';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bears-05</h1>
        </header>
        <p className="App-intro">
          Bears-5 PWA to come.
        </p>
      </div>
    );
  }
}
