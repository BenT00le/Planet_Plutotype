var express = require('express');

var passport = require('passport');

const app = express();
const port = process.env.PORT || 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// default GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});




/*
 * we need to set up some POST routes to validate input with passport
 * and our DB to do this we can call functions from functions and passport config
 */

// login GET route
app.get('/login', (req, res) => {
  res.send({ express: 'send login page' });
});

// default GET route
app.get('/register', (req, res) => {
  res.send({ express: 'send register page' });
});


/*
 * here if we succsefuly validate login credentials
 * send the client to their account page
 */

