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

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});