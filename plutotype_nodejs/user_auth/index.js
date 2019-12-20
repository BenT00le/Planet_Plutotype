if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}

const express = require('express');

const path = require('path');

const crypt = require('bcrypt');

const uid = require('uuid');

const passport = require('passport');

const flash = require('express-flash');

const session = require('express-session');

const app = express();

const initPassport = require('./passport-config');

initPassport(passport,
    email => users.find(user => user.email === email),
    id => users.find(id => user.id === id));

// use ejs as the veiw engine
app.set('view-engine', 'ejs');

//make post data accsessable in req object
app.use(express.urlencoded({extended: false}));

app.use(flash());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnititialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

/*
this a local variable to store users for testing that will be
replaced with some database to store users and relivent related information
*/
const users = [];




/*
routes
*/

//render the home page page with ejs if no page is requested
app.get('/', (req, res) =>
{
    res.render(path.join(__dirname,'veiws','index.ejs'));
});

//render the register page with ejs if that page is requested
app.get('/login', (req, res) =>
{
    res.render(path.join(__dirname,'veiws','login.ejs'));
});

//render the register page with ejs if that page is requested
app.get('/register', (req, res) =>
{
    res.render(path.join(__dirname,'veiws','register.ejs'));
});

//respond with a json file if the users dir is requested
app.get('/users',(req,res) =>
{
    res.json(users)
});



//handle post requests

app.post('/register', async (req, res) =>
{
    try
    {
        console.log(req.body.password)
        const salt = await crypt.genSalt()
        const hashed = await crypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashed);
        const user = {id: uid.v4(), name: req.body.name, email: req.body.email, password: hashed};
        users.push(user);
        console.log(user)
        res.redirect('/login');
    }
    catch
    {
        res.redirect('/register');
    }
});


app.post('/login', passport.authenticate('local', {
    sucsessRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

//handle an http post request and print hashed version of the password sent in the post request  
app.post('/users', async (req, res) =>
{
    try
    {
        const salt = await crypt.genSalt()
        const hashed = await crypt.hash(req.body.passsword, salt);
        console.log(salt);
        console.log(hashed);
        const user = {name: req.body.name, email: req.body.email, password: hashed};
        users.push(user);
        res.status(201).send();
    }
    catch
    {
        res.status(500).send();
    }
});

app.listen(3000)