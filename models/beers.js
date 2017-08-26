module.exports = function(sequelize, Sequelize) {
 
    var Beer = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        ibu: {
            type: Sequelize.INTEGER
        },
        pairing: {
            type: Sequelize.STRING
        },
        style: {
            type: Sequelize.STRING
        }
    });
 
    return Beer;
}

