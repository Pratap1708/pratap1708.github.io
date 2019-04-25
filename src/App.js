import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './Components/Projects';
import Maincontainer from './Components/content/maincontainer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        searchedCity: ''
    }
     this.searchedCity = this.searchedCity.bind(this);
  }
  searchedCity(){
    this.setState ({
      searchedCity: 'Patna'
    })
  }
  // `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`
  // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa0fe261765f492265c9b966476ea607
  componentDidMount() {
    var Api_Key ="fa0fe261765f492265c9b966476ea607";
    var city= "delHi";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Api_Key}`)
      .then(res => {
        const response = res.data;
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Maincontainer city={this.state.city} searchedCity={this.searchedCity}/>
        
      </div>
    );
  }
}

export default App;
