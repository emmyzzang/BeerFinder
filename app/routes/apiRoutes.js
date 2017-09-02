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
var axios = require('axios');
var router = require('express').Router(); // We do not need module.export way because we declared it here
// var $ = require('jquery');
var handlebars = require('handlebars');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('3f1612c064ffbdbd5925f006fa955076');
var sequelize = require('sequelize');
var db = require("../../models");

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data)
  // ---------------------------------------------------------------------------

  router.get("/beers", function(req, res) {
      var search = req.query.search;
      var beerQuery = [];
      console.log(search);
    brewdb.search.all({q: search}, function(err, data) {
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
      var reviews = req.body;
      console.log(req.body);

      db.beer.create({
        name: req.body.name,
        type: req.body.type,
        clarity: req.body.clarity,
        hue: req.body.hue,
        ibu: req.body.ibu,
        bubbleSize: req.body.bubbleSize,
        head: req.body.head
      }).then(function(dbTodo) {
        console.log('success');
        res.json(201, {response: {code: 201, message: 'Beer has been added'}});
      });



      //   queryString,
      // function(err) {
      //   if(err) {
      //     return res.json(400, {response: {code: 400, message:'An error appeared.'}});
      //   } else {
      //     console.log('success');
      //     res.json(201, {response: {code: 201, message: 'Beer has been added'}});
      // }});
});


//
// name: {
//     type: DataTypes.INTEGER
// },
// type: {
//     type: DataTypes.STRING
// },
// clarity: {
//     type: DataTypes.STRING
// },
// hue: {
//     type: DataTypes.STRING
// },
// ibu: {
//     type: DataTypes.INTEGER
// },
// bubbleSize: {
//     type: DataTypes.STRING
// },
// head: {
//     type: DataTypes.STRING
// }
//

//
// db.Todo.create({
//   text: req.body.text,
//   complete: req.body.complete
// }).then(function(dbTodo) {
//   // We have access to the new todo as an argument inside of the callback function
//   res.json(dbTodo);
// });
//
//
// //module.exports = function(sequelize, DataTypes) {
//   var Todo = sequelize.define("Todo", {
//     text: DataTypes.STRING,
//     complete: DataTypes.BOOLEAN
//   });
//   return Todo;
// };



// This already assumes /api is in front of it (/api/search)
  // router.post("/search", function(req, res) {
  //
  //   console.log('GOODBYE WORLD!');
  //
  //   var search = 'English Pale';
  //   var beerQuery = [];
  //
  // console.log("name " + req.body.name);
  // console.log("type " + req.body.type);
  // console.log("ibu " + req.body.ibu);
  //
  // var queryObj = {};
  //
  // if(req.body.name != '') {
  //   queryObj['name'] = req.body.name;
  // }
  // if(req.body.type != '') {
  //   queryObj['type'] = req.body.type;
  // }
  // if(req.body.ibu !='') {
  //   queryObj['ibu'] = req.body.ibu;
  //
  // }
  //
  // // Use case for empty search query...
  // if(Object.keys(queryObj).length === 0 && queryObj.constructor === Object) {
  //
  // }
  //
  // brewdb.beer.find(queryObj, function(err, data) {
  //     if(err) {
  //       console.log(err);
  //       return;
  //     }
  //     if(data === null) return;
  //     for(var i = 0; i < data.length; i++) {
  //       beerQuery.push({
  //         name: data[i].name,
  //         description: data[i].description
  //       });
  //     }
  // console.log(data);
  // res.json(data);


//   var theData = {
//   beers: beerQuery
//   };
//
//   // var hbsObject = { burgers: data };
//   console.log(theData);
//   res.render('catalogue', theData);
//
//
// });

// });


  // app.get("/api/beerAdd", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JS array
  // (ex. User fills out a beer [_________]... this data is then sent to the server...
  // Then the server saves the data to the beerData array)
  // ---------------------------------------------------------------------------

  // app.post("/api/beers", function(req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a beer
  //   if (beerData.length < ___[PLACEHOLDER]) {
  //     beerData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     beerAddData.push(req.body);
  //     res.json(false);
  //   }
  // });

  // ---------------------------------------------------------------------------
// I added this below code so you could clear out the beerData while working with the functionality.
//   // Don't worry too much about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     beerData = [];
//     beerAddData = [];

//     console.log(beerData);
//   });

module.exports = router;



// Database:
// brewdb.search.all() - finds every parent category of types of beers
