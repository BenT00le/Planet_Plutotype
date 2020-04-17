import React, { Component } from 'react';
import calendar from 'calendar.css'

class Sidebar extends Component
{
    //this will need to be given a UID key
    //for getting the correct data from DB
    render()
    {
        //this.props.UID
        //used as <Calendar UID="f789ae756789dbc" />
        return(
                <div className = "SideBar">
                <div className = "Logo"> 
                <img src="Logo.png" id = "logo"> </div>
                <div className = "Categories" id  = "categories"> </div>
                <div className = "button" id = "dateButton"> 
                <button onclick = {calendar.showDates} type="button"
                className="btn btn-default btn-xl"> Show Date</div>
                <div className = "button" id = "backToStart">
                <button onclick = "run(1)" type="button" 
                className="btn btn-default btn-xl"> Today</div>
            </div> 
        );
    }
}
export default Sidebar;