const UserService = require('../services/UserService');

const getUser = (req, res) => {
  UserService.getUser(req.userId).then((user) => {
    res.json(user);
  });
};

const getUserInstructingGroups = (req, res) => {
  UserService.getUserInstructingGroups(req.userId).then((records) => {
    res.json(records);
  });
};

const getUserEnrolledGroups = (req, res) => {
  UserService.getUserEnrolledGroups(req.userId).then((records) => {
    res.json(records);
  });
};

const getUserAssignedLabs = (req, res) => {
  UserService.getUserAssignedLabs(req.userId).then((records) => {
    res.json(records);
  });
};

const getUserToDoLabs = (req, res) => {
  UserService.getUserToDoLabs(req.userId).then((records) => {
    res.json(records);
  });
};

module.exports = {
  getUser,
  getUserInstructingGroups,
  getUserEnrolledGroups,
  getUserAssignedLabs,
  getUserToDoLabs,
};
