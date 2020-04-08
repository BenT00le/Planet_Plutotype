import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Calendar from "./Calendar.js";
import App from './App';
class ReactRtr extends Component
{
	render()
	{
		/*this router component will render different pages based on
		url ending  "localhost:3000/client" or "localhost:3000/app"*/
		return(
		<BrowserRouter>
			<Route path="/client" component={Calendar} />
			<Route path="/app" component={App} />
			<Route path="/login" component={App} />
			<Route path="/register" component={App} />
		</BrowserRouter>
		);
	}
}

export default ReactRtr;