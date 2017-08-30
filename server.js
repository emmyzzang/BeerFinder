// ==============================================================================
// DEPENDENCIES
// Series of NPM packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
let app = express();
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();

// ==============================================================================
// HANDLEBARS CONFIGURATION
// This sets up the basic properties for Handlebars
// ==============================================================================
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 8080; // This is a local placeholder

// ==============================================================================
// BODY PARSER
// This makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
// ==============================================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// THIS IS CRITICAL :) Because it imports static content onto html.
// Starting with all the static content of app/public, all that gets imported
// onto the server
app.use(express.static("app/public"));

// For Passport
app.use(session({
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized:true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// ================================================================================

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// app.get('/', function(req, res) {
//     res.send('Welcome to Passport with Sequelize');
// });

//Models
var models = require("./models");

//Routes
// Getting an error that says require is not a function

var apiRoutes = require("./app/routes/apiRoutes");
var htmlRoutes = require("./app/routes/htmlRoutes");

// Anything that deals with html routes is based off of root.
// Anything that deals with api routes deals with /api as a root. 
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
