import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/header/Header';
import Location from './Components/location/location';
import Footer from './Components/footer/Footer';

import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
