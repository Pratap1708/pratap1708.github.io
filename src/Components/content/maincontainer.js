import React, { Component } from 'react';
import Header from '../header/Header';
import Location from '../location/location';
import Resultcontainer from './resultcontainer';

class Maincontainer extends React.Component {
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
   render() {
      return (
         <main className="main-container">
            <Header/>
         	<Location/>
         	<Resultcontainer/>
         </main>
      );
   }
}

export default Maincontainer;