import React from 'react';
import './App.css';

function Task(props)
{
	return(
		//check params for color and date
		<div>
		//specify size static or dynamic
			<h>props.title</h>
			
			<h1>props.notes</h1>
		</div>

	);
}

export default Task

