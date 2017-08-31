// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");
const router = require('express').Router();


// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Redirects root to Sign-In Page
  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
	});
  // Dashboard
  router.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });
  // Reviews
  router.get('/reviews', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reviews.html"));
  });
  // list
  router.get('/list', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });
  // Catalogue
  router.get('/catalogue', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/catalogue.html"));
  });
  // Randomize
  router.get('/randomize', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/randomize.html"));
  });

  // If no matching route is found default to home
  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/signin.html"));
  // });

module.exports = router;
