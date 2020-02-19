class PlanIT_App {
    
    /* Setup the postgre connection server */
    const {Pool, Client} = require('pg')
    // TODO: Set the current path to the DB server
    // TODO: Setup loop to confirm the conneciton
    const connectionString = ''
    const client = new client { connectionString:connectionString }
    client.connect()
    
    
    /**
     * This function confirms the login infomration of the user
     */
    function LogIn(USRNM, PASS) {
        var returnValue = 0;
        // TODO: INJECTION STERILIZATION
        // TODO: CHECK TO SEE IF QUERY WORKED
        var queryResults = client.query('SELECT * FROM USERS WHERE username = ' + USRNM + ' AND password = ' + PASS + ';')
        
        if (queryResults.rows[0] === undefined) {
            // Console.log('THIS IS AN ERROR')
        }
        else {
            // Get the UID from the row
            var returnValue = queryResults.rows[0];
        }
        return returnValue;
    }
    
    /**
     * This function accepts a date, and returns the tasks for the next 7 days
     */
    function getWeekTasks(startDay, userID) {
        // Date new Date(year, month, day, hours, minutes, seconds, milliseconds)
        var queryString = '';
        var i;
        for (i = 0; i > 7; i++) {
            getIndividualTask(startDay, userID, 'AND')
            startDay = startDay + 1;
        }
        
        getIndividualTask(startDay, userID, ';')
        
        
        var queryResults = client.query(queryString)
        
        // TODO: Check to see if an error occured
        // TODO: Return the rows
        
        return queryResults.rows
    }
    
    /**
     * This function gets the individual tasks
     */
    function getIndividualTask(startDay, userID, endingCharacter) {
        // Date new Date(year, month, day, hours, minutes, seconds, milliseconds)
        var queryString = '';
        queryString = (queryString + 'SELECT * FROM TASKS WHERE userid = ' + userID + ' AND day = ' + startDay.getDate()
        + ' AND month = ' + startDay.getMonth() + ' AND year = ' + startDay.getFullYear() + endingCharacter)
        
        var queryResults = client.query(queryString)
        
        // TODO: Check to see if an error occured
        // TODO: Return the rows
        
        return queryResults.rows
    }
    
}






