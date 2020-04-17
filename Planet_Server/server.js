const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const calendar = require('client/static/calendar.html')
//const DB_Connection = require('./Functions.js');
//now we can call DB_Connection.LogIn(USRNM, PASS)

const app = express();
const port = process.env.Port || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//genaric GET route
app.get('/api/test', (req, res) =>
	{
		res.send({express: 'express server'});
	});

//echo POST data
app.post('/api/in', (req, res) =>
	{
		console.log(req.body);
		res.send(
			`received : ${req.body.post}`
		);
	});

//
app.get('/user', (req, res) =>
    {
        res.sendFile(path.join(__dirname, 'client/static', 'calendar.html'));
    });


//create login routes
app.use(express.static(path.join(__dirname, 'client/static')));

if (process.env.NODE_ENV === 'production')
{
  // Serve any static files located in client/build
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`listening on port: ${port}`));