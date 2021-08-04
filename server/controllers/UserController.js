const passport = require('passport');
const UserService = require('../services/UserService');

// Checks if it's a guest or user entering webpage
exports.main = (req, res) => {
	UserService.getSession(req.session.token).then((data) => {
		req.session.token = data.token;
		res.json(data.user);
	});
};

exports.getUser = (req, res) => {
	UserService.getUser(req.params.userID).then((records) => {
		res.json(records);
	})
};

exports.getUserEnrolledGroups = (req, res) => {
	UserService.getUserEnrolledGroups(req.params.userID).then((records) => {
		res.json(records);
	})
};

exports.getUserInstructingGroups = (req, res) => {
	UserService.getUserInstructingGroups(req.params.userID).then((records) => {
		res.json(records);
	})
};

// Authenticates User through Google OAuth
exports.authenticate = passport.authenticate('google', {
		scope: ['email', 'profile']
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
	res.redirect(req.session.url);
};
