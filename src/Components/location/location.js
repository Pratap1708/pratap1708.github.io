import React, { Component } from 'react';


class Locaion extends Component {

	 constructor(){
	    super();
	    this.state = {
	    	citySearched: ''
	    };

	    this.handleChange = this.handleChange.bind(this);
	 }
	handleChange(event) {
	    this.setState({
	    	citySearched: event.target.value
	    });
	}

	  findCoordinates = () => {
	    navigator.geolocation.getCurrentPosition(
	      	position => {
	        	const location = JSON.stringify(position);
	        	this.setState({ location });
	      	},
	      	error => alert(error.message),
	      	{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
	    );
	  };
	
  render() {
    return (
    	<section>
      		<div>
      			<label htmlFor="search">Your Location</label>
      			<input type="text" value={this.state.citySearched} placeholder="Enter Your Location" onChange={this.handleChange} searchedCity={this.props.citySearched}/>
      		</div>
      		<h5><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.city}, India, 11:13 PM</h5>
      	</section>
    );
  }
}

export default Locaion;