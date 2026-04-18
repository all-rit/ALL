const db = require('../database');

const updateGuestUserId = (userid, usersessionid) => {
  return db.Session.findByPk(usersessionid)
      .then((session) => {
        if (session) {
          session.userid = userid;
          return session.save();
        }
        return true;
      })
      .catch((error) => {
        console.log('unable to update guest userid:', error);
        return true;
      });
};

const authenticate = async (data) => {
  try {
    const firstName = data.name.givenName;
    const lastInitial = data.name.familyName.slice(0, 1);
    const email = data.emails[0].value;
    const userpfp = data.photos[0].value;

    // First check if user exists with this email
    const existingUser = await db.Users.findOne({where: {email1: email}});

    if (existingUser) {
      if (!existingUser.userpfp) {
        existingUser.set({
          userpfp: userpfp,
        });
        await existingUser.save();
      }
      // If user exists, create a new session
      const session = await db.Session.create({userid: existingUser.userid});
      return session;
    }

    // If no existing user, proceed with new account creation
    const newAccount = {
      firstName,
      lastInitial,
      email1: email,
      userpfp,
    };
    return await createNewAccountAndSession(newAccount);
  } catch (error) {
    console.error('Error while authenticating: ', error);
    throw error;
  }
};

const createNewAccountAndSession = async (newAccount) => {
  try {
    const user = await db.Users.create({
      firstname: newAccount.firstName,
      lastinitial: newAccount.lastInitial,
      email1: newAccount.email1,
      userpfp: newAccount.userpfp,
    });

    const newSession = await db.Session.create({
      userid: user.userid,
    });

    return newSession;
  } catch (error) {
    console.error('Error creating new account and session', error);
    throw error;
  }
};

const getSession = async (token) => {
  const createUserAndSession = async () => {
    // Creates a brand new user and session
    const user = await db.Users.create({});
    const session = await db.Session.create({userid: user.userid});
    return {user, token: session.usersessionid};
  };

  try {
    // if the request doesn't have a token, create a new user and session
    if (!token) {
      return createUserAndSession();
    }

    // if the request token doesn't map to a session,
    // create a new user and session
    const session = await db.Session.findByPk(token);
    if (!session) {
      return createUserAndSession();
    }

    // if the session maps to a null user, create a new user and session
    // we create a new session because a session should depend on a user
    // and not the other way around
    const user = await db.Users.findByPk(session.userid);
    if (!user) {
      return createUserAndSession();
    }

    return {user, token};
  } catch (error) {
    console.error('Error getting session:', error);
    throw error;
  }
};

const getUserEnrolledGroups = (userid) => {
  return db.sequelize.query(
      `SELECT * FROM "enrollment" 
			JOIN "groups" ON  "enrollment"."groupID"="groups"."id" 
			WHERE "enrollment"."userID"=(:userID) AND "enrollment"."isActive"=true
		`,
      {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true,
      },
  );
};

const getUserInstructingGroups = (userid) => {
  return db.Groups.findAll({
    where: {
      instructorUserID: userid,
      isActive: true,
    },
    raw: true,
  });
};

// fetches only the labs that the user has been assigned (across all groups)
// but hasn't made any progress in
const getUserToDoLabs = (userid) => {
  return db.sequelize.query(
      `
		SELECT DISTINCT "labID", "labName" FROM "group_labs"
		JOIN "enrollment" on "group_labs"."groupID" = "enrollment"."groupID"
		JOIN "labs" on "labs"."id" = "group_labs" . "labID"
		WHERE "enrollment"."userID"=(:userID) AND "labID" NOT IN
      		(SELECT "labid" FROM "userlabcompletion"
          		WHERE "userid"=(:userID))
        ORDER BY "labID" ASC
		`,
      {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
      },
  );
};

const getUserAssignedLabs = (userid) => {
  return db.sequelize.query(
      `SELECT DISTINCT "labID" FROM "group_labs" 
			JOIN "enrollment" ON  "group_labs"."groupID"="enrollment"."groupID" 
			WHERE "enrollment"."userID"=(:userID) 
			ORDER BY "labID" ASC
		`,
      {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
      },
  );
};

const getUser = (userid) => {
  return db.Users.findOne({
    where: {
      userid: userid,
    },
  })
  .then((user) => {
    return user;
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  getUserEnrolledGroups,
  getUser,
  getSession,
  getUserInstructingGroups,
  getUserToDoLabs,
  getUserAssignedLabs,
  authenticate,
  updateGuestUserId,
};
