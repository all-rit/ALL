const db = require('../database');

const createLogin = (UserID, UserSessionID) => {
	return db.Login.create({
		UserID: UserID,
		UserSessionID: UserSessionID
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
					FirstName: firstName
				})
				.then((user) => {
					// Create a new session
					return db.Session.create({
						UserSessionID: userSessionID,
						UserID: user.UserID
					});
				});
		})
		.then((session) => {
			// Create a new login
			return createLogin(session.UserID, userSessionID).then((login) => {
				return login.UserSessionID;
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
						UserID: user.UserID
					})
					.then((session) => {
						return { user, session };
					});
			})
			.then((data) => {
				return createLogin(data.session.UserID, data.session.UserSessionID).then((login) => {
					return { user: data.user, token: login.UserSessionID };
				});
			});
	}

	// Find the user's details
	return db.Session
		.findByPk(token)
		.then((session) => {
			return db.User.findByPk(session.UserID).then((user) => {
				return { user, token };
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
