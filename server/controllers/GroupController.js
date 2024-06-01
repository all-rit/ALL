/* eslint-disable max-len */
const GroupService = require('../services/GroupService');

const getGroupLabs = (req, res) => {
  GroupService.getGroupLabs(req.params.groupID).then((records) => {
    res.json(records);
  });
};

const getGroupEnrolledStudents = (req, res) => {
  GroupService.getGroupEnrolledStudents(req.params.groupID).then((records) => {
    res.json(records);
  });
};

const getCompletedGroupLabs = (req, res) => {
  GroupService.getCompletedGroupLabs(req.params.userID, req.params.groupID).then((records) => {
    res.json(records);
  });
};

const enrollUserInGroup = (req, res) => {
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

const unenrollUserFromGroup = (req, res) => {
  GroupService.unenrollUserFromGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
  }).then(() => {
    res.sendStatus(200);
  });
};

const createGroup = (req, res) => {
  GroupService.createGroup(
      req.body.userID,
      req.body.groupName,
  ).then((data) => {
    console.warn(data);
    res.json(data);
  });
};

const addGroupLab = (req, res) => {
  GroupService.addGroupLab(
      req.body.groupID,
      req.body.labID,
  ).then((data) => {
    res.sendStatus(200);
  });
};

const deleteGroupLab = (req, res) => {
  GroupService.deleteGroupLab(
      req.body.groupID,
      req.body.labID,
  ).then((data) => {
    res.sendStatus(200);
  });
};
const deleteGroup = (req, res) => {
  GroupService.deleteGroup(
      req.body.groupID,
  ).then((data) => {
    res.sendStatus(200);
  });
};

const updateGroup = (req, res)=>{
  GroupService.updateGroup(
      req.body.groupID,
      req.body.groupName,
  ).then((data) =>{
    res.sendStatus(200);
  });
};

module.exports = {
  updateGroup,
  deleteGroup,
  deleteGroupLab,
  addGroupLab,
  createGroup,
  unenrollUserFromGroup,
  enrollUserInGroup,
  getCompletedGroupLabs,
  getGroupEnrolledStudents,
  getGroupLabs,
};
