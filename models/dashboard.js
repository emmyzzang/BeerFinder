// Import (require) orm.js
// ==============================================================================
let orm = require('../config/orm.js');


// // Beer-specific inputs to call ORM functions
// // ==============================================================================
// let beer = {
// 	selectAll: function (cb) {
// 		orm.selectAll([[['beers']]], function (res) {
// 			cb(res);
// 		});
// 	},
// 	// cols and vals are arrays
// 	insertOne: function (cols, vals, cb) {
// 		orm.insertOne([[['beers']]], cols, vals, function (res) {
// 			cb(res);
// 		});
// 	},
// 	updateOne: function (objColVals, condition, cb) {
// 		orm.updateOne([[['beers']]], objColVals, condition, function (res) {
// 			cb(res);
// 		});
// 	},
// 	deleteOne: function (condition, cb) {
// 		orm.deleteOne([[['beers']]], condition, function (res) {
// 			cb(res);
// 		});
// 	}
// };




// Beer-specific inputs Sequelized
// ==============================================================================

// module.exports = function(sequelize, Sequelize) {
//
//  // Figure out variable names and rename everything
//     var Beers = sequelize.define('beers', {
//
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: Sequelize.INTEGER
//         },
//
//         name: {
//             type: Sequelize.STRING,
//             notEmpty: true
//         },
//
//         userRating: {
//             type: Sequelize.STRING,
//             notEmpty: true
//         }
//
//
//     });
//
//     return Beers;
//
// }
