'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.JAWSDB_URL || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};


var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
})
.forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// RELATIONS - JOIN TABLES
db.user.hasMany(db.rating);
db.rating.belongsTo(db.user);

db.rating.hasMany(db.beer);
db.beer.belongsTo(db.rating);

module.exports = db;
