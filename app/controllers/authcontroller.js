var path = require('path');

var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
}

exports.signin = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/signin.html'));
}

exports.dashboard = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}