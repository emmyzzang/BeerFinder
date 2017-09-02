var authController = require('../controllers/authcontroller.js');
var userController = require('../controllers/usercontroller.js');

module.exports = function(app, passport) {
	app.get('/signup', authController.signup);
	app.get('/signin', authController.signin);

	// Force User to Login
	app.get('/dashboard',isLoggedIn, authController.dashboard);
	app.get('/reviews', isLoggedIn, authController.reviews);
	app.get('/list', isLoggedIn, authController.list);
	app.get('/catalogue', isLoggedIn, authController.catalogue);
	app.get('/randomize', isLoggedIn, authController.randomize);
	
	app.get('/logout',authController.logout);

	app.post('/signup', passport.authenticate('local-signup', {
	        successRedirect: '/dashboard',
	        failureRedirect: '/signup'
	    }
	));

	app.post('/signin', passport.authenticate('local-signin', {
	        successRedirect: '/dashboard',
	        failureRedirect: '/signin'
	    }
	));

	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated()) {
				userController.setUser(req.session.passport.user);
				return next();
			}
	    res.redirect('/signin');
	};
}
