
// var sequelize = require('sequelize');
// var beer = require('./beers');
// var user = require('./user');

// var Users = sequelize.define('user', {})
//var Beers = sequelize.define('beers', {})


var Beer = require('./beers.js');
var User = require('./user.js');

module.exports = function(sequelize, DataTypes) {

	var Rating = sequelize.define('rating', {
	    rating: DataTypes.INTEGER
	});

	// TODO: Fix belongsToMany 

	// user.belongsToMany(beer, { through: Ratings })
	// beer.belongsToMany(user, { through: Ratings })

	return Rating;

};