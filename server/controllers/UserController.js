const passport = require('passport');
const UserService = require('../services/UserService');

// Checks if it's a guest or user entering webpage
exports.main = (req, res) => {
	UserService.getSession(req.session.token).then((data) => {
		req.session.token = data.token;
		res.json(data.user);
	});
};

// Authenticates User through Google OAuth
exports.authenticate = passport.authenticate('google', {
	scope: [ 'profile' ]
});

// Callback used for Google OAuth
exports.authenticateRedirect = passport.authenticate('google', {
	failureRedirect: '/'
});

exports.authenticateCallback = (req, res) => {
	UserService.authenticate(req.user.profile).then((data) => {
		UserService.updateGuestUserId(data.userid, req.session.token).then(()=>{
			req.session.token = data.usersessionid;
			res.redirect(req.session.url);
			}
		)

	});
};

exports.storeURL = (req,res) => {
	req.session.url = req.body.url.href;
	res.sendStatus(200);
};

// Logging out will clear sessions
exports.logout = (req, res) => {
	req.logout();
	req.session.token = null;
	res.redirect(process.env.CLIENT_URL);
};
