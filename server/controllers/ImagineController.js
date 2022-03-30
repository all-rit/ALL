const ImagineService = require('../services/ImagineService');

exports.userAvatar = (req, res) => {
    ImagineService.userAvatar({
            userID: req.body.userID,
            avatar: req.body.avatar
        }).then(() => {
            res.sendStatus(200);
        })
};

exports.userSquad = (req, res) => {
    ImagineService.userSquad({
            userID: req.params.userID,
            squad: req.params.squad
        }).then(() => {
            res.sendStatus(200);
        })
};

exports.userLobbyMessages = (req, res) => {
    ImagineService.userLobbyMessages({
            userID: req.params.userID,
            lobbyMessages: req.params.lobbyMessages
        }).then(() => {
            res.sendStatus(200);
        })
};