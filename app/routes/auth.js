var authController = require('../controllers/authController.js');

module.exports = function(app) {
	app.get('/signup', authController.signup);
}