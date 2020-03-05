import React from 'react';
import ReactDOM from 'react-dom'
import AppRoutes from './planet_react/src/AppRoutes.js'

window.onload = () => 
{
	ReactDOM.render(<AppRoutes/>, document.getElementById('main'))
};