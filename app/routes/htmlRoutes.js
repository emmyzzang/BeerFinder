// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/beers", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/beers.html"));
  });

  app.get("/beersAdd", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/beersAdd.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};
