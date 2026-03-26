const db = require('../database');

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
  getUserInstructingGroups,
  getUserToDoLabs,
  getUserAssignedLabs,
};
