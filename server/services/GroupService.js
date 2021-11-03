const db = require('../database');
const { nanoid } = require("nanoid");

exports.getGroupLabs = (groupid) => {
    return db.sequelize.query('SELECT * FROM "labs" JOIN "group_labs" ON  "group_labs"."labID"="labs"."id" WHERE "group_labs"."groupID"=(:groupID)', {
        replacements: {groupID: groupid},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}

exports.getGroupEnrolledStudents = (groupid) => {
    return db.sequelize.query('SELECT * FROM "enrollment" JOIN "users" ON  "enrollment"."userID"="users"."userid" WHERE "enrollment"."groupID"=(:groupID)', {
        replacements: {groupID: groupid},
        type: db.sequelize.QueryTypes.SELECT,
        raw: true
    });
}

exports.enrollUserInGroup = (userid, code) => {
    return db.Groups
        .findOne({
            where: {
                code: code,
            }
        }).then((group) => {
                if (group){
                    return db.Enrollment.create({
                        userID: userid,
                        groupID: group.id,
                        enrolledDate: Date.now(),
                        isActive: true
                    }).then(() => {
                        return {
                            "status": "success"
                        }
                    })
                } else {
                    return {
                        "status": "failure"
                    }
                }
            }
        )
}

exports.unenrollUserFromGroup = (data) => {
    const userid = data.userID;
    const groupid = data.groupID;
    if (userid && groupid){
        return db.Enrollment
            .findOne({
                where:
                    {
                        userID: userid,
                        groupID: groupid,
                    }
            }).then((enrollment) => {
                enrollment.isActive = false;
                enrollment.save();
            }).catch((err) => {
                console.log(err);
                return true;
            })
    }
    return Promise.resolve();
}

exports.createGroup = (userID, groupName) => {
    return db.Groups.create({
        instructorUserID: userID,
        groupName: groupName,
        createdDate: Date.now(),
        isActive: true,
        code: nanoid(6).toUpperCase()
    }).then((data) => {
        console.log(data)
        return {"groupID":data.id};
    }).catch(() => console.log("Error encountered"))
}

exports.addGroupLab = (groupID,labID) => {
    return db.GroupLabs.create({
        groupID: groupID,
        labID: labID,
    }).then((data) => {
        console.log(data)
    }).catch(() => console.log("Error encountered"))
}

exports.deleteGroupLab = (groupID,labID) => {
    return db.sequelize.query('DELETE FROM "group_labs" WHERE "group_labs"."groupID"=(:groupID) AND "group_labs"."labID"=(:labID)', {
        replacements: {groupID: groupID, labID: labID},
        type: db.sequelize.QueryTypes.DELETE,
        raw: true
    });
}

exports.updateGroup = (groupID,groupName) =>{
    return db.sequelize.query('UPDATE "groups" SET "groupName" = (:groupName) WHERE "id" = (:groupID)', {
        replacements: {groupID: groupID, groupName: groupName},
        type: db.sequelize.QueryTypes.UPDATE,
        raw: true
    });
}