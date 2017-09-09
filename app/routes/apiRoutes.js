// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on beer data, beer add list, etc.
// // ===============================================================================

// const beerData = require("../data/_____[PLACEHOLDER]");
// const beerAddData = require("../data/_____[PLACEHOLDER]");


// // ===============================================================================
// // ROUTING
// // ===============================================================================
var path = require('path');
var axios = require('axios');
// We do not need module.export way because we declared express router here
var router = require('express').Router();
var handlebars = require('handlebars');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('3f1612c064ffbdbd5925f006fa955076');
var sequelize = require('sequelize');
var db = require("../../models");
var userController = require('../controllers/usercontroller.js');


// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data)
// ---------------------------------------------------------------------------

router.get("/beers", function(req, res) {
  var search = req.query.search;
  var beerQuery = [];
  console.log(search);
  brewdb.search.all({q: search, withBreweries: "Y"}, function(err, data) {
    // for(var i = 0; i < data.length; i++) {
    //     beerQuery.push({
    //         name: data[i].name,
    //         description: data[i].description
    //     });
    // }
    console.log(data);
    console.log(err);
    res.json(data);

    // res.json(beerQuery);
  });

});

router.post('/reviews', function(req, res) {

  var myRating = req.body.userRating;

  var userId = userController.getUser();
  // This checks to make sure user is logged in. If not, redirect to signin page.
  if(userId == null) {
    res.redirect('/signin');
  }

  db.rating.create({
    user_rating: myRating,
    userId: userId
    // The callback response after inserting to the rating table in db
  }).then(function(ratingObj) {

    var ratingId = ratingObj.id;

    // inserting into the beer table in the db
    db.beer.create({
      name: req.body.name,
      type: req.body.type,
      clarity: req.body.clarity,
      hue: req.body.hue,
      ibu: req.body.ibu,
      bubbleSize: req.body.bubbleSize,
      head: req.body.head,
      ratingId: ratingId // This is originating from the db.rating.create insert
    }).then(function() {
      console.log('Beer Insert Successful!');
      res.redirect('/list');
    });
  });
});

// Create a new router to display user list - list.html called this function and
// Grab stuff from db to populate to html.
router.get('/myList', function(req, res) {
  var userId = userController.getUser();
  // This checks to make sure user is logged in (again). If not, redirect to signin page.
  if(userId == null) {
    res.redirect('/signin');
  }

  db.rating.findAll({
    where: {
      userId: userId
    },
    include: [db.beer]
  }).then(function(listResult) {
    console.log('My List Object: ' + listResult);
    res.json(listResult);
  });
});

// deleting the beer from the result object but not the
router.delete("/posts/:id", function(req, res) {
  db.rating.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(listResult) {
    res.json(listResult);
  })
})


module.exports = router;


// Database:
// brewdb.search.all() - finds every parent category of types of beers
