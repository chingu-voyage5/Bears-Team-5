import React from 'react';
import { Link } from 'react-router-dom';
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
        {/* THIS LINKS BELOW ARE JUST FOR TESTING PURPOSES.
        REMOVE WHEN IMPLEMENTING LANDING PAGE */}
        <hr />
        <Link to="/goals" >Goals</Link>
        <hr />
        <Link to="/login" >Login</Link>
        <hr />
        <Link to="/signup" >Signup</Link>
      </div>
    );
  }
}
