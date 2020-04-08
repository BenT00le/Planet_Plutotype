import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Calendar from "./Calendar.js";
import App from './App';
import Login from './Login';
import Register from './Register';
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
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</BrowserRouter>
		);
	}
}

export default ReactRtr;