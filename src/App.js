import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './Components/Projects';
import Maincontainer from './Components/content/maincontainer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      name: 'sp',
      dataWeather: {
        coord: {
          lon: null
        }
      }
    }
  }
  // `http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`
  // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa0fe261765f492265c9b966476ea607
  componentDidMount() {
    var Api_Key ="fa0fe261765f492265c9b966476ea607";
    var city= "delHi";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Api_Key}`)
      .then(res => {
        const dataWeather = res.data;
        this.setState({ dataWeather });
      })
  }

  render() {
    return (
      <div className="App">
        <Maincontainer resultData={this.state.dataWeather}/>
        
      </div>
    );
  }
}

export default App;
