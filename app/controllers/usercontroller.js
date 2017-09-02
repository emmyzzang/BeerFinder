var exports = module.exports = {}

var user = '';
exports.setUser = function(user) {
  this.user = user;
}

exports.getUser = function() {
  return this.user;
}
