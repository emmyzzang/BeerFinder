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

// module.exports = function(app) {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data)
//   // ---------------------------------------------------------------------------

//   app.get("/api/beers", function(req, res) {
//     res.json(tableData);
//   });

//   app.get("/api/beerAdd", function(req, res) {
//     res.json(waitListData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JS array
//   // (ex. User fills out a beer [_________]... this data is then sent to the server...
//   // Then the server saves the data to the beerData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/beers", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a beer
//     if (beerData.length < ___[PLACEHOLDER]) {
//       beerData.push(req.body);
//       res.json(true);
//     }
//     else {
//       beerAddData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
// // I added this below code so you could clear out the beerData while working with the functionality.
// //   // Don't worry too much about it!

// //   app.post("/api/clear", function() {
// //     // Empty out the arrays of data
// //     beerData = [];
// //     beerAddData = [];

// //     console.log(beerData);
// //   });
// };
