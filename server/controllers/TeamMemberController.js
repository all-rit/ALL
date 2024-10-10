const TeamMemberService = require('../services/TeamMemberService');

exports.getAllTeamMembers = (req, res) => {
  TeamMemberService.getAllTeamMembers().then((records) => {
    res.json(records);
  });
};

exports.getAllProfessors = (req, res) => {
  TeamMemberService.getAllProfessors().then((records) => {
    res.json(records);
  });
};

exports.getAllAlumni = (req, res) => {
  TeamMemberService.getAllAlumni().then((records) => {
    res.json(records);
  });
};

exports.getAllDevPartners = (req, res) => {
  TeamMemberService.getAllDevPartners().then((records) => {
    res.json(records);
  });
};
