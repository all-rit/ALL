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

exports.unenrollUserFromGroup = (req, res) => {
    GroupService.unenrollUserFromGroup({
        userID: req.body.userID,
        groupID: req.body.groupID,
    }).then(() => {
        res.sendStatus(200);
    })
};