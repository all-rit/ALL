const db = require('../database');

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

exports.unenrollUserFromGroup = (data) => {
    console.log("4");
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
