
var sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

	var rating = sequelize.define('rating', {

		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		user_rating: {
			type: DataTypes.INTEGER
		}
	});
	return rating;
};
