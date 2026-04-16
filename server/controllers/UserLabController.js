const UserLabService = require('../services/UserLabService');

const getUserLabRecords = async (req, res) => {
  try {
    const labs = await UserLabService.getUserLabRecords(req.userId);
    res.status(200).json(labs);
  } catch (error) {
    console.error('Error while executing getUserLabRecords', error);
    res.status(500).json({ error: error.message });
  }
};

const getUserLabCompletion = (req, res) => {
  UserLabService.getUserLabCompletion(req.userId, req.params.labId).then((records) => {
    res.json(records);
  });
};

const completeAbout = (req, res) => {
  UserLabService.completeAbout({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const completeReading = (req, res) => {
  UserLabService.completeReading({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const completeExercise = (req, res) => {
  UserLabService.completeExercise({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const completeReinforcement = (req, res) => {
  UserLabService.completeReinforcement({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const completeQuiz = (req, res) => {
  UserLabService.completeQuiz({
    labid: req.body.labid,
    usersessionid: req.session.token,
    date: Date.now(),
    quizscore: Math.floor(req.body.quizscore),
    quizresult: req.body.quizresult,
  }).then(() => {
    res.sendStatus(200);
  });
};

const userCompleteAbout = (req, res) => {
  UserLabService.userCompleteAbout({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const userCompleteReading = (req, res) => {
  UserLabService.userCompleteReading({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const userCompleteExercise = (req, res) => {
  UserLabService.userCompleteExercise({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const userCompleteReinforcement = (req, res) => {
  UserLabService.userCompleteReinforcement({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
  }).then(() => {
    res.sendStatus(200);
  });
};

const userCompleteQuiz = (req, res) => {
  UserLabService.userCompleteQuiz({
    labid: req.body.labid,
    userid: req.body.userid,
    date: Date.now(),
    quizscore: Math.floor(req.body.quizscore),
  }).then(() => {
    res.sendStatus(200);
  });
};

module.exports = {
  getUserLabRecords,
  getUserLabCompletion,
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
};
