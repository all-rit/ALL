const db = require('../database');
const crypto = require('crypto');

const createGroup = async (userId, groupName, color) => {
  try {
    const data = await db.Groups.create({
      instructorUserID: userId,
      groupName: groupName,
      createdDate: Date.now(),
      color: color,
      isActive: true,
      code: crypto.randomUUID().toUpperCase().slice(1, 7),
    });
    return data;
  } catch (error) {
    console.error('Error while creating group', error);
  }
};

const updateGroup = async (groupId, userId, groupName, groupColor) => {
  try {
    const group = await db.Groups.findOne({
      where: {
        id: groupId,
        instructorUserID: userId,
        isActive: true,
      }
    });

    if (!group) {
      return {
        status: 'failure',
        message: 'The specified group does not exist, or you are not the instructor of the group.'
      };
    }

    return await db.Groups.update(
      {
        groupName: groupName,
        color: groupColor
      },
      {
        where: {
          id: groupId,
        },
      });
  } catch (error) {
    console.warn('Error updating group name/color: ', error);
  }
};

const deleteGroup = async (groupId, userId) => {
  const group = await db.Groups.findOne({
    where: {
      id: groupId,
      instructorUserID: userId,
      isActive: true,
    }
  });

  if (!group) {
    return {
      status: 'failure',
      message: 'The specified group does not exist, or you are not the instructor of the group.'
    };
  }

  return db.sequelize.query('UPDATE "group_labs" SET "isActive"=false WHERE "group_labs"."groupID"=(:groupId); UPDATE "groups" SET "isActive"=false WHERE "groups"."id"=(:groupId); UPDATE "enrollment" SET "isActive"=false WHERE "enrollment"."groupID" =(:groupId);', {
    replacements: { 
      groupId: groupId 
    },
    type: db.sequelize.QueryTypes.UPDATE,
    raw: true,
  });
};

const enrollUserInGroup = (userId, code) => {
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
            userID: userId,
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
              userID: userId,
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

const unenrollUserFromGroup = (userId, groupId) => {
  if (userId && groupId) {
    return db.Enrollment
      .findOne({
        where:
        {
          userID: userId,
          groupID: groupId,
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

const addGroupLab = async (groupId, userId, labId) => {
  try {
    const group = await db.Groups.findOne({
      where: {
        id: groupId,
        instructorUserID: userId,
        isActive: true,
      }
    });

    if (!group) {
      return {
        status: 'failure',
        message: 'The specified group does not exist, or you are not the instructor of the group.'
      };
    }

    const [groupLab, created] = await db.GroupLabs.findOrCreate({
      where: {
        groupID: groupId,
        labID: labId,
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

const getGroupLabs = (groupid) => {
  return db.sequelize.query('SELECT * FROM "labs" JOIN "group_labs" ON  "group_labs"."labID"="labs"."id" WHERE "group_labs"."groupID"=(:groupID) AND "group_labs"."isActive"=true', {
    replacements: { groupID: groupid },
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const getGroupEnrolledStudents = (groupid) => {
  return db.sequelize.query('SELECT * FROM "enrollment" JOIN "users" ON  "enrollment"."userID"="users"."userid" WHERE "enrollment"."groupID"=(:groupID)', {
    replacements: { groupID: groupid },
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const getCompletedGroupLabs = (userid, groupid) => {
  return db.sequelize.query('SELECT labs."labShortName" FROM userlabcompletion INNER JOIN labs ON labs.id = userlabcompletion.labid INNER JOIN group_labs ON group_labs."labID" = userlabcompletion.labid INNER JOIN enrollment ON enrollment."groupID" = group_labs."groupID" WHERE userlabcompletion.labcompletiontime IS NOT NULL AND userlabcompletion.userid=(:userID) AND group_labs."groupID"= (:groupID) AND enrollment."userID" = (:userID)', {
    replacements: { groupID: groupid, userID: userid },
    type: db.sequelize.QueryTypes.SELECT,
    raw: true,
  });
};

const deleteGroupLab = async (groupID, labID) => {
  try {
    return await db.GroupLabs.update(
      { isActive: false },
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

module.exports = {
  createGroup,
  updateGroup,
  deleteGroup,
  enrollUserInGroup,
  unenrollUserFromGroup,
  addGroupLab,
  getGroupLabs,
  deleteGroupLab,
  getCompletedGroupLabs,
  getGroupEnrolledStudents,
};
