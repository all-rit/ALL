/* eslint-disable max-len */
const UserLabService = require('../services/UserLabService');

completeAbout = (req, res) => {
  UserLabService.completeAbout({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

completeReading = (req, res) => {
  UserLabService.completeReading({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

completeExercise = (req, res) => {
  UserLabService.completeExercise({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

completeReinforcement = (req, res) => {
  UserLabService.completeReinforcement({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

completeQuiz = (req, res) => {
  UserLabService.completeQuiz({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
    quizscore: req.body.quizscore,
    quizresult: req.body.quizresult,
  }).then(() => {
    res.sendStatus(200);
  });
};

userCompleteAbout = (req, res) => {
  UserLabService.userCompleteAbout({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

userCompleteReading = (req, res) => {
  UserLabService.userCompleteReading({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

userCompleteExercise = (req, res) => {
  UserLabService.userCompleteExercise({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

userCompleteReinforcement = (req, res) => {
  UserLabService.userCompleteReinforcement({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

userCompleteQuiz = (req, res) => {
  UserLabService.userCompleteQuiz({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
    quizscore: req.body.quizscore,
  }).then(() => {
    res.sendStatus(200);
  });
};

getUserLabCompletion = (req, res) => {
  UserLabService.getUserLabCompletion({
    userid: req.params.userID,
    labid: req.params.labID,
  }).then((records) => {
    res.json(records);
  });
};

getUserLabRecords = async (req, res) => {
  try {
    const labs = await UserLabService.getUserLabRecords(req.params.userID);
    res.status(200).json(labs);
  } catch (error) {
    console.error('Error while executing getUserLabRecords', error);
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  completeAbout,
  completeReading,
  completeExercise,
  completeReinforcement,
  completeQuiz,
  userCompleteAbout,
  userCompleteReading,
  userCompleteExercise,
  userCompleteReinforcement,
  userCompleteQuiz,
  getUserLabCompletion,
  getUserLabRecords,
};
