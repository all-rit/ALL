const ImagineService = require('../services/ImagineService');

exports.userAvatar = (req, res) => {
  ImagineService.userAvatar({
    userID: req.body.userID,
    avatar: req.body.avatar,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.userSquad = (req, res) => {
  ImagineService.userSquad({
    userID: req.body.userID,
    squad: req.body.squad,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.userLobbyMessages = (req, res) => {
  ImagineService.userLobbyMessages({
    userID: req.body.userID,
    lobbyMessages: req.body.lobbyMessages,
  }).then(() => {
    res.sendStatus(200);
  });
};

exports.getUserSquad = (req, res) => {
  ImagineService.getUserSquad(req.params.userID).then((records) => {
    res.json(records);
  });
};

exports.getUserAvatar = (req, res) => {
  ImagineService.getUserAvatar(req.params.userID).then((records) => {
    res.json(records);
  });
};
