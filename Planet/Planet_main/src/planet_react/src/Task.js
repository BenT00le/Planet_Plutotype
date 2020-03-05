import React from 'react';
import './App.css';
import {Link} from 'react-router';

export default class Task extends React.Component
{
	render()
	{
		return(
			//check params for color and date
			<div>
			//specify size static or dynamic
				<h>props.title</h>
				
				<body>props.notes</body>
			</div>

		);
	}
}

