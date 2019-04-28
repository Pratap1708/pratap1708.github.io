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
  // searchedCity(){
  //   this.setState ({
  //     searchedCity: 'Patna'
  //   })
  // }
  // `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`
  // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa0fe261765f492265c9b966476ea607



  

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
