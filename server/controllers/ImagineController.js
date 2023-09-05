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

