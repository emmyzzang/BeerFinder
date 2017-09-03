module.exports = function(sequelize, DataTypes) {

  var beer = sequelize.define('beer', {
    // UUID gets generated based on the time -- based on insert of beer object to db
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
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
  return beer;
}
// deleted beer.sync() because articles said it was bad practice
