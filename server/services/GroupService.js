/* eslint-disable max-len */
const db = require('../database');

const getGroupLabs = (groupid) => {
  return db.sequelize.query('SELECT * FROM "labs" JOIN "group_labs" ON  "group_labs"."labID"="labs"."id" WHERE "group_labs"."groupID"=(:groupID) AND "group_labs"."isActive"=true', {
    replacements: {groupID: groupid},
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const getGroupEnrolledStudents = (groupid) => {
  return db.sequelize.query('SELECT * FROM "enrollment" JOIN "users" ON  "enrollment"."userID"="users"."userid" WHERE "enrollment"."groupID"=(:groupID)', {
    replacements: {groupID: groupid},
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const getCompletedGroupLabs = (userid, groupid) =>{
  return db.sequelize.query('SELECT labs."labShortName" FROM userlabcompletion INNER JOIN labs ON labs.id = userlabcompletion.labid INNER JOIN group_labs ON group_labs."labID" = userlabcompletion.labid INNER JOIN enrollment ON enrollment."groupID" = group_labs."groupID" WHERE userlabcompletion.labcompletiontime IS NOT NULL AND userlabcompletion.userid=(:userID) AND group_labs."groupID"= (:groupID) AND enrollment."userID" = (:userID)', {
    replacements: {groupID: groupid, userID: userid},
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const enrollUserInGroup = (userid, code) => {
  return db.Groups
      .findOne({
        where: {
          code: code,
        },
      }).then((group) => {
        if (group) {
          // check if user is already enrolled in the group
          return db.Enrollment.findOne({
            where: {
              userID: userid,
              groupID: group.id,
              isActive: true,
            },
          }).then((record) => {
            if (record !== null) {
              // an active enrollment record already exists, do not duplicate record
              return {
                'status': 'failure',
                'message': 'User is already enrolled in the group.',
              };
            } else {
              return db.Enrollment.create({
                userID: userid,
                groupID: group.id,
                enrolledDate: Date.now(),
                isActive: true,
              }).then(() => {
                return {
                  'status': 'success',
                  'message': 'User has been successfully enrolled in the group.',
                };
              });
            }
          });
        } else {
          return {
            'status': 'failure',
            'message': 'Invite code is not valid.',
          };
        }
      },
      );
};

const unenrollUserFromGroup = (data) => {
  const userid = data.userID;
  const groupid = data.groupID;
  if (userid && groupid) {
    return db.Enrollment
        .findOne({
          where:
                    {
                      userID: userid,
                      groupID: groupid,
                      isActive: true,
                    },
        }).then((enrollment) => {
          enrollment.isActive = false;
          enrollment.save();
        }).catch((err) => {
          console.log(err);
          return true;
        });
  }
  return Promise.resolve();
};

const createGroup = async (userID, groupName) => {
  try {
    const data = await db.Groups.create({
      instructorUserID: userID,
      groupName: groupName,
      createdDate: Date.now(),
      isActive: true,
      code: crypto.randomUUID().toUpperCase().slice(1, 7),
    });
    return data;
  } catch (error) {
    console.error('Error while creating group', error);
  }
};

const addGroupLab = async (groupID, labID) => {
  try {
    const [groupLab, created] = await db.GroupLabs.findOrCreate({
      where: {
        groupID: groupID,
        labID: labID,
      },
      defaults: {
        isActive: true,
      },
    });

    if (!created && !groupLab.isActive) {
      groupLab.isActive = true;
      await groupLab.save();
    }

    return groupLab;
  } catch (error) {
    console.error('Error adding group lab', error);
  }
};

const deleteGroupLab = async (groupID, labID) => {
  try {
    return await db.GroupLabs.update(
        {isActive: false},
        {
          where: {
            groupID: groupID,
            labID: labID,
          },
        });
  } catch (error) {
    console.error('Error occurred while deleting lab: ', error);
  }
};

const deleteGroup = (groupID) => {
  return db.sequelize.query('UPDATE "group_labs" SET "isActive"=false WHERE "group_labs"."groupID"=(:groupID); UPDATE "groups" SET "isActive"=false WHERE "groups"."id"=(:groupID); UPDATE "enrollment" SET "isActive"=false WHERE "enrollment"."groupID" =(:groupID);  ', {
    replacements: {groupID: groupID},
    type: db.sequelize.QueryTypes.UPDATE,
    raw: true,
  });
};


const updateGroup = async (groupID, groupName) => {
  try {
    return await db.Groups.update(
        {groupName: groupName},
        {
          where: {
            id: groupID,
          },
        });
  } catch (error) {
    console.warn('Error updating lab name: ', error);
  }
};

module.exports = {
  getGroupLabs,
  updateGroup,
  deleteGroup,
  deleteGroupLab,
  addGroupLab,
  createGroup,
  unenrollUserFromGroup,
  getCompletedGroupLabs,
  enrollUserInGroup,
  getGroupEnrolledStudents,
};
