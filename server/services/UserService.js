const db = require('../database');

exports.updateGuestUserId = (userid, usersessionid) =>{
	return db.Session
		.findByPk(usersessionid)
		.then((session) => {
			session.userid = userid;
			session.save();
			return true;
	}).catch(()=> {
		console.log('unable to update guest userid')
		return true;
	})
}

exports.authenticate = (data) => {
	const userSessionID = data.id.slice(0,19);
	const firstName = data.name.givenName;
	const lastInitial = data.name.familyName.slice(0,1);
	const email = data.emails[0].value;
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
			return db.Users
				.create({
					firstname: firstName,
					lastinitial: lastInitial,
					email1: email,
				})
				.then((user) => {
					// Create a new session
					return db.Session.create({
						usersessionid: userSessionID,
						userid: user.userid
					});
				})
				.catch(()=> "error inputting session id from google");
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getSession = (token) => {
	// If the token doesn't exist, it's a guest, so create a new account!
	if (!token) {
		return db.Users
			.create({})
			.then((user) => {
				return db.Session
					.create({
						userid: user.userid
					})
					.then((session) => {
						return { user, token: session.usersessionid };
					});
			})
	}

	// Find the user's details
	return db.Session
		.findByPk(token)
		.then((session) => {
			return db.Users.findByPk(session.userid).then((user) => {
				return { user, token };
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getUserEnrolledGroups = (userid) => {
	return db.sequelize.query(
		`SELECT * FROM "enrollment" 
			JOIN "groups" ON  "enrollment"."groupID"="groups"."id" 
			WHERE "enrollment"."userID"=(:userID)
		`, {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}

exports.getUserInstructingGroups = (userid) => {
	return db.Groups
	
		.findAll({
			where: {
				instructorUserID: userid,
			},
			raw: true
		})
}

exports.getUserToDoLabs = (userid) => {
	return db.sequelize.query(
		`
		SELECT DISTINCT "labID" FROM "group_labs"
		JOIN "enrollment" on "group_labs"."groupID" = "enrollment"."groupID"
		WHERE "enrollment"."userID"=(:userID) AND "labID" NOT IN
      		(SELECT "labid" FROM "userlabcompletion"
          		WHERE "userid"=(:userID))
        ORDER BY "labID" ASC
		`, {
			replacements: {userID: userid},
			type: db.sequelize.QueryTypes.SELECT,
		});
}

exports.getUserAssignedLabs = (userid) => {
	return db.sequelize.query(
		`SELECT DISTINCT "labID" FROM "group_labs" 
			JOIN "enrollment" ON  "group_labs"."groupID"="enrollment"."groupID" 
			WHERE "enrollment"."userID"=(:userID) 
			ORDER BY "labID" ASC
		`, {
		replacements: {userID: userid},
		type: db.sequelize.QueryTypes.SELECT,
	});
}

exports.getUser = (userid) => {
	return db.Users
		.findOne({
			where:
				{
					userid:userid
				}
		}).then((user) => {
			return user;
		})
		.catch((err) => {
			console.log(err);
	})
}

