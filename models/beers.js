module.exports = function(sequelize, DataTypes) {

// TODO: change filename to beers.js
// Changed user to beer, because this defines beer, not user

    var beer = sequelize.define('beer', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        clarity: {
            type: DataTypes.STRING
        },
        hue: {
            type: DataTypes.STRING
        },
        ibu: {
            type: DataTypes.INTEGER
        },
        bubbleSize: {
            type: DataTypes.STRING
        },
        head: {
            type: DataTypes.STRING
        }
    });
    beer.sync();

    return beer;
}
