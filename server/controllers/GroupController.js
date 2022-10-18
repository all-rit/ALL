const GroupService = require('../services/GroupService');

exports.getGroupLabs = (req, res) => {
  GroupService.getGroupLabs(req.params.groupID).then((records) => {
    res.json(records);
  });
};

exports.getGroupEnrolledStudents = (req, res) => {
  GroupService.getGroupEnrolledStudents(req.params.groupID).then((records) => {
    res.json(records);
  });
};

exports.getCompletedGroupLabs = (req, res) => {
  GroupService.getCompletedGroupLabs(req.params.userID, req.params.groupID).then((records) => {
    res.json(records);
  });
};

exports.enrollUserInGroup = (req, res) => {
  GroupService.enrollUserInGroup(
      req.body.userID,
      req.body.inviteCode,
  ).then((response) => {
    // todo: figure out how to send status code along with message,
    // right now, the status is repeated and code doesn't look clean
    if (response.status === 'success') {
      res.status(200).json({
        status: 200,
        message: response.message,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: response.message,
      });
    }
  });
};

exports.unenrollUserFromGroup = (req, res) => {
  GroupService.unenrollUserFromGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.createGroup = (req, res) => {
  GroupService.createGroup(
      req.body.userID,
      req.body.groupName,
      req.body.courses,
  ).then((data) => {
    res.json(data);
  });
};

exports.addGroupLab = (req, res) => {
  GroupService.addGroupLab(
      req.body.groupID,
      req.body.labID,
  ).then((data) => {
    res.sendStatus(200);
  });
};

exports.deleteGroupLab = (req, res) => {
  GroupService.deleteGroupLab(
      req.body.groupID,
      req.body.labID,
  ).then((data) => {
    res.sendStatus(200);
  });
};
exports.deleteGroup = (req, res) => {
  GroupService.deleteGroup(
      req.body.groupID,
  ).then((data) => {
    res.sendStatus(200);
  });
};

exports.updateGroup = (req, res)=>{
  GroupService.updateGroup(
      req.body.groupID,
      req.body.groupName,
  ).then((data) =>{
    res.sendStatus(200);
  });
};
