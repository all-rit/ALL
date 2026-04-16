const db = require('../database');

const getUser = (userId) => {
  return db.Users.findOne({
    where: {
      id: userId,
    }
  });
};

const getUserInstructingGroups = (userId) => {
  return db.Groups.findAll({
    where: {
      instructorUserID: userId,
      isActive: true,
    },
    raw: true,
  });
};

const getUserEnrolledGroups = (userId) => {
  return db.sequelize.query(
    `SELECT * FROM "enrollment" 
			JOIN "groups" ON  "enrollment"."groupID"="groups"."id" 
			WHERE "enrollment"."userID"=(:userId) AND "enrollment"."isActive"=true
		`,
    {
      replacements: { userId: userId },
      type: db.sequelize.QueryTypes.SELECT,
      raw: true,
    },
  );
};

const getUserAssignedLabs = (userId) => {
  return db.sequelize.query(
    `SELECT DISTINCT "labID" FROM "group_labs" 
			JOIN "enrollment" ON  "group_labs"."groupID"="enrollment"."groupID" 
			WHERE "enrollment"."userID"=(:userId) AND "enrollment"."isActive"=true
			ORDER BY "labID" ASC
		`,
    {
      replacements: { userId: userId },
      type: db.sequelize.QueryTypes.SELECT,
    },
  );
};

// fetches only the labs that the user has been assigned (across all groups)
// but hasn't made any progress in
const getUserToDoLabs = (userId) => {
  return db.sequelize.query(
    `
		SELECT DISTINCT "labID", "labName" FROM "group_labs"
		JOIN "enrollment" on "group_labs"."groupID" = "enrollment"."groupID"
		JOIN "labs" on "labs"."id" = "group_labs" . "labID"
		WHERE "enrollment"."userID"=(:userId) AND "enrollment"."isActive"=true AND "labID" NOT IN
      		(SELECT "labid" FROM "userlabcompletion"
          		WHERE "userid"=(:userId))
        ORDER BY "labID" ASC
		`,
    {
      replacements: { userId: userId },
      type: db.sequelize.QueryTypes.SELECT,
    },
  );
};

module.exports = {
  getUser,
  getUserEnrolledGroups,
  getUserInstructingGroups,
  getUserAssignedLabs,
  getUserToDoLabs,
};
