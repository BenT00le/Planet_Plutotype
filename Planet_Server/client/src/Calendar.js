import React, { Component } from 'react';
import calendar from 'calendar.js'
import Sidebar from 'Sidebar'

class Calendar extends Component
{
	//this will need to be given a UID key
	//for getting the correct data from DB
	render()
	{
		//this.props.UID
		//used as <Calendar UID="f789ae756789dbc" />
		return(
		<div>
			<head>
	        <link rel="stylesheet" type="text/css" href="calendar.css">
	        </link>
	        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
	        </link>
	        <script src="calendar.js"></script>

	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	        </link>

	        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


	        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	        
	    	</head>

			<div>
				<h1>
				this is a Calendar for user
				{this.props.UID}
				</h1>
				<button onClick={console.log("Calendar button")}>buton</button>
				<button onClick={console.log("create task")}>
				create Task</button>
			</div>	
			<Sidebar/>
		</div>
		);
	}
}
export default Calendar;