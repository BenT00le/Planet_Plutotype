import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Calendar from "./Calendar.js";
import App from './App';
class ReactRtr extends Component
{
	render()
	{
		return(
		<BrowserRouter>
			<Route path="/client" component={Calendar} />
			<Route path="/app" component={App} />
		</BrowserRouter>
		);
	}
}

export default ReactRtr;