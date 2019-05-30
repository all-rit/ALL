const db = require('../database');

const createLogin = (UserID, UserSessionID) => {
	return db.Login.create({
		userid: UserID,
		usersessionid: UserSessionID
	});
};

exports.authenticate = (data) => {
	const userSessionID = data.id;
	const firstName = data.name.givenName;

	return db.Session
		.findByPk(userSessionID)
		.then((session) => {
			// Session doesn't exist, so let's create a new account!
			if (session === null) {
				throw new Error('Session do not exist in the database');
			}

			return session;
		})
		.catch(() => {
			// Create a new account
			return db.User
				.create({
					firstname: firstName
				})
				.then((user) => {
					// Create a new session
					return db.Session.create({
						usersessionid: userSessionID,
						userid: user.userid
					});
				});
		})
		.then((session) => {
			// Create a new login
			return createLogin(session.userid, userSessionID).then((login) => {
				return login.usersessionid;
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getSession = (token) => {
	// If the token doesn't exist, it's a guest, so create a new account!
	if (!token) {
		return db.User
			.create({})
			.then((user) => {
				return db.Session
					.create({
						userid: user.userid
					})
					.then((session) => {
						return { user, session };
					});
			})
			.then((data) => {
				return createLogin(data.session.userid, data.session.usersessionid).then((login) => {
					return { user: data.user, token: login.usersessionid };
				});
			});
	}

	// Find the user's details
	return db.Session
		.findByPk(token)
		.then((session) => {
			return db.User.findByPk(session.userid).then((user) => {
				return { user, token };
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
