import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Link } from 'react-router-dom';



export default function ReactHeader() {
  return (
  	<header>
  		<span>CLOUD.CO</span>
      <ul className="link-container">
      	<li>
      		<i className="fa fa-clock"></i>About us
      	</li>
      	<li>LOCATION</li>
      	<li>MAP</li>
      </ul>
    </header>
  )
}