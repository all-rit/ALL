const UserService = require('../services/UserService');

const index = (req, res) => {
  UserService.getSession(req.session.token).then((data) => {
    req.session.token = data.token;
    res.json(data.user);
  });
};

const getUserInstructingGroups = (req, res) => {
  UserService.getUserInstructingGroups(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserEnrolledGroups = (req, res) => {
  UserService.getUserEnrolledGroups(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserAssignedLabs = (req, res) => {
  UserService.getUserAssignedLabs(req.params.userID).then((records) => {
    res.json(records);
  });
};

const getUserToDoLabs = (req, res) => {
  UserService.getUserToDoLabs(req.params.userID).then((records) => {
    res.json(records);
  });
};

module.exports = {
  index,
  getUserEnrolledGroups,
  getUserInstructingGroups,
  getUserAssignedLabs,
  getUserToDoLabs,
};
