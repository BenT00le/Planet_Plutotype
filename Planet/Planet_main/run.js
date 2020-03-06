const path = require('path');
const { Server } = require('http');
const Express = require('express');
const React = require('react');
const renderToString = require('react-dom/server');
const { match, RouteContext } = require('react-router');
const routes = require('./routes.js');

//var express = require('express');

//var passport = require('passport');

const app = Express();
const server = new Server(app);
app.set('veiw engin', 'ejs');
app.set('veiws', path.join(__dirname, 'static'));

//folder for static assets
app.use(Express.static(path.join(__dirname, 'static')));

const port = process.env.PORT || 5000;
//console.log that your server is up and running
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Listening on port ${port}`);
});

//universal routing
app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        //generate the react markup
        let markup;
        if (renderProps) {
            markup = renderToString(React.createElement(RouteContext, renderProps));
        } else {
            markup = renderToString(React.createElement(NotFoundPage, null));
            res.status(404);
        }

        return res.render('index', { markup });
    });
});
