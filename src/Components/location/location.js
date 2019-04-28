import React, { Component } from 'react';
import axios from 'axios';

import Resultcontainer from '../content/resultcontainer';

class Locaion extends Component {

	 constructor(){
	    super();
	    this.state = {
	    	citySearched: '',
	    	temperature: undefined,
	        city: undefined,
	        country: undefined,
	        humidity: undefined,
	        description: undefined,
	        error: undefined,
	        searchedCity: '',
	        data: []
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	 }
	handleChange(event) {
		const {citySearched} = this.state;
	    this.setState({
	    	citySearched: event.target.value
	    });
	}
	handleClick(event) {
		const {citySearched, data} = this.state;
	    var Api_Key ="fa0fe261765f492265c9b966476ea607";
	    var city= this.state.citySearched;
	    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${Api_Key}`)
	      .then(res => {
	        const response = res.data;
	        this.setState({
	        	data: response,
	          // temperature: response.list[0].main.temp,
	          // city: response.city.name,
	          // country: response.list[0].sys.country,
	          // humidity: response.list[0].main.humidity,
	          // description: response.list[0].weather[0].description,
	          error: ""
	        })

	      })
	}
	
  render() {
    return (

    	<section className="search-container">
      		<div>
      			<label htmlFor="search">Your Location</label>
      			<input type="text" value={this.state.citySearched} placeholder="Enter Your Location" onChange={this.handleChange} />
      			<button className="search-btn" onClick={this.handleClick} >Seach</button>
      		</div>
      		<Resultcontainer weatherdata= {this.state.data} />
      	</section>
    );
  }
}

export default Locaion;