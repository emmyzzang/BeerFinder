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

exports.reviews = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/reviews.html'));
}

exports.list = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/list.html'));
}

exports.catalogue = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/catalogue.html'));
}

exports.randomize = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/randomize.html'));
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}
