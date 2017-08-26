var Beers = require('./beers');
var Users = require('./user');


const Users = sequelize.define('user', {})
const Beers = sequelize.define('beers', {})
const Ratings = sequelize.define('ratings', {
    rating: DataTypes.INTEGER
})

User.belongsToMany(Beers, { through: Ratings })
Beers.belongsToMany(Users, { through: Ratings })