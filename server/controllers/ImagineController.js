const ImagineService = require('../services/ImagineService');

exports.discomfortCount = (req, res) => {
  ImagineService.discomfortCount({
    userID: req.body.userID,
    discomfortCount: req.body.discomfortCount,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.experientialMain = (req, res) => {
  ImagineService.experientialMain({
    userID: req.body.userID,
    experientialMain: req.body.experientialMain,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.experientialProtanopia = (req, res) => {
  ImagineService.experientialProtanopia({
    userID: req.body.userID,
    experientialProtanopia: req.body.experientialProtanopia,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.preSurvey = (req, res) => {
  ImagineService.preSurvey({
    userID: req.body.userID,
    preSurvey: req.body.preSurvey,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.postSurvey = (req, res) => {
  ImagineService.postSurvey({
    userID: req.body.userID,
    postSurvey: req.body.postSurvey,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.getUsers = (req, res) => {
  ImagineService.getUsers().then((users) => {
    res.json(users);
  });
};


exports.readMoreCount = (req, res) =>{
  ImagineService.readMoreCount({
    userID: req.body.userID,
    readMoreCount: req.body.readMoreCount,
  }).then(() => {
    res.sendStatus(200);
  });
};


exports.readMoreTimeElapsed = (req, res) =>{
  ImagineService.readMoreTimeElapsed({
    userID: req.body.userID,
    readMoreTimeElapsed: req.body.readMoreTimeElapsed,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.readingSectionPagePosition = (req, res) =>{
  ImagineService.readingSectionPagePosition({
    userID: req.body.userID,
    readingSectionPagePosition: req.body.readingSectionPagePosition,
  }).then(() => {
    res.sendStatus(200);
  });
};

