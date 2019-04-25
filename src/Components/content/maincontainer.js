import React, { Component } from 'react';
import Header from '../header/Header';
import Location from '../location/location';
import Resultcontainer from './resultcontainer';

class Maincontainer extends React.Component {
	constructor(){
	    super();
	    this.state= {

	    }
	 }
   render() {
      return (
         <main className="main-container">
            <Header/>
         	<Location city={this.props.city} searchedCity={this.props.searchedCity}/>
         	<Resultcontainer/>
         </main>
      );
   }
}

export default Maincontainer;