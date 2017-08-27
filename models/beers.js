module.exports = function(sequelize, DataTypes) {

// TODO: change filename to beers.js 
// Changed user to beer, because this defines beer, not user

    var beer = sequelize.define('beer', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ibu: {
            type: DataTypes.INTEGER
        },
        pairing: {
            type: DataTypes.STRING
        },
        style: {
            type: DataTypes.STRING
        }
    });
 
    return beer;
}

