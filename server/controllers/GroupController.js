const GroupService = require('../services/GroupService');

exports.getGroupLabs = (req, res) => {
    GroupService.getGroupLabs(req.params.groupID).then((records) => {
        res.json(records);
    })
};

exports.getGroupEnrolledStudents = (req, res) => {
    GroupService.getGroupEnrolledStudents(req.params.groupID).then((records) => {
        res.json(records);
    })
};

exports.enrollUserInGroup = (req, res) => {
    GroupService.enrollUserInGroup(
        req.body.userID,
        req.body.inviteCode,
    ).then((response) => {
        if (response.status === "success"){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    })
}

exports.unenrollUserFromGroup = (req, res) => {
    GroupService.unenrollUserFromGroup({
        userID: req.body.userID,
        groupID: req.body.groupID,
    }).then(() => {
        res.sendStatus(200);
    })
};

exports.createGroup = (req, res) => {
    GroupService.createGroup(
        req.body.userID,
        req.body.groupName,
        req.body.courses
    ).then((data) => {
        res.json(data);
    })
}

exports.addGroupLab = (req, res) => {
    GroupService.addGroupLab(
        req.body.groupID,
        req.body.labID
    ).then((data) => {
        res.sendStatus(200);
    })
}

exports.deleteGroupLab = (req, res) => {
    GroupService.deleteGroupLab(
        req.body.groupID,
        req.body.labID
    ).then((data) => {
        res.sendStatus(200);
    })
}

exports.updateGroup = (req,res)=>{
    GroupService.updateGroup(
        req.body.groupID,
        req.body.groupName
    ).then((data) =>{
        res.sendStatus(200);
    })
}
