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

// handleSearchedCity ( citySearched ) {

// 	this.props.searchedCity (citySearched);
// }

   render() {
      return (
         <main className="main-container">
            <Header/>
         	<Location  />
         	<Resultcontainer />
         </main>
      );
   }
}

export default Maincontainer;