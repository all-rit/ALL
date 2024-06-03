/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
const db = require('../database');

const updateGuestUserId = (userid, usersessionid) =>{
  return db.Session
      .findByPk(usersessionid)
      .then((session) => {
        session.userid = userid;
        session.save();
        return true;
      }).catch(()=> {
        console.log('unable to update guest userid');
        return true;
      });
};

const authenticate = async (data) => {
  try {
    const userSessionID = data.id.slice(0, 19);
    const firstName = data.name.givenName;
    const lastInitial = data.name.familyName.slice(0, 1);
    const email = data.emails[0].value;

    console.warn(process.env.ENVIRONMENT);

    let session = await db.Session.findOne(userSessionID);
    if (!session) {
      const newAccount = {
        firstName: firstName,
        lastInitial: lastInitial,
        email: email,
      };
      session = await createNewAccountAndSession(userSessionID, newAccount);
    }
    return session;
  } catch (error) {
    console.error('Error while authenticating: ', error);
    throw error;
  }
};

const mockAuthenticate = async () => {
  try {
    const mockUser = {
      id: parseInt(Math.random().toString().slice(0, 19)),
      name: {
        givenName: 'mock',
        familyName: 'user',
      },
      emails: [{value: 'mockuser@gmail.com'}],
    };
    return await authenticate(mockUser);
  } catch (error) {
    console.error('Error while executing mockAuthenticate', error);
  }
};


const createNewAccountAndSession = async (userSessionID, newAccount) => {
  try {
    const user = await db.Users.create({
      firstname: newAccount.firstName,
      lastInitial: newAccount.lastInitial,
      email1: newAccount.email,
    });
    console.warn(user);
    const newSession = await db.Session.create({
      userSessionID: userSessionID,
      userid: user.userid,
    });
    return newSession;
  } catch (error) {
    console.error('Error creating new account and session', error);
    throw error;
  }
};

const getSession = (token) => {
  // If the token doesn't exist, it's a guest, so create a new account!
  if (!token) {
    return db.Users
        .create({})
        .then((user) => {
          return db.Session
              .create({
                userid: user.userid,
              })
              .then((session) => {
                return {user, token: session.usersessionid};
              });
        });
  }

  // Find the user's details
  return db.Session
      .findOne(token)
      .then((session) => {
        return db.Users.findByPk(session.userid).then((user) => {
          return {user, token};
        });
      })
      .catch((err) => {
        console.log(err);
      });
};

const getUserEnrolledGroups = (userid) => {
  return db.sequelize.query(
      `SELECT * FROM "enrollment" 
			JOIN "groups" ON  "enrollment"."groupID"="groups"."id" 
			WHERE "enrollment"."userID"=(:userID) AND "enrollment"."isActive"=true
		`, {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true,
      });
};

const getUserInstructingGroups = (userid) => {
  return db.Groups
      .findAll({
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
		`, {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
      });
};

const getUserAssignedLabs = (userid) => {
  return db.sequelize.query(
      `SELECT DISTINCT "labID" FROM "group_labs" 
			JOIN "enrollment" ON  "group_labs"."groupID"="enrollment"."groupID" 
			WHERE "enrollment"."userID"=(:userID) 
			ORDER BY "labID" ASC
		`, {
        replacements: {userID: userid},
        type: db.sequelize.QueryTypes.SELECT,
      });
};

const getUser = (userid) => {
  return db.Users
      .findOne({
        where:
				{
				  userid: userid,
				},
      }).then((user) => {
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
  mockAuthenticate,
  updateGuestUserId,
};

