// Created this controller to create setters and getters that track user auth
var exports = module.exports = {}

var user = '';
exports.setUser = function(user) {
  this.user = user;
}

exports.getUser = function() {
  return this.user;
}
