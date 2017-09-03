
var sequelize = require('sequelize');
// var beer = require('./beers');
// var user = require('./user');

// var Users = sequelize.define('user', {})
// var Beers = sequelize.define('beers', {})


// var Beer = require('./beers.js');
// var User = require('./user.js');

module.exports = function(sequelize, DataTypes) {

	// User = sequelize.define('users', {})
	// Beer = sequelize.define('beers', {})


	var rating = sequelize.define('rating', {

			id: {
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER
			},
			user_id: {
				type: DataTypes.INTEGER
			},
			beer_id: {
				type: DataTypes.INTEGER
			},
			user_rating: {
				type: DataTypes.INTEGER
			}

		});

	// TODO: Fix belongsToMany

	// User.belongsToMany(Beer, { through: 'Rating', foreignKey: 'id' })
	// Beer.belongsToMany(User, { through: 'Rating', foreignKey: 'id' })

	return rating;

};
