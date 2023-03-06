const ExerciseService = require('../../services/lab6/ExerciseService');

exports.submitAvatar = (req, res) => {
  ExerciseService.submitAvatar({
    usersessionid: req.session.token,
    avatar: req.body.avatar,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.submitQualQuestions = (req, res) => {
  ExerciseService.submitQualQuestions({
    usersessionid: req.session.token,
    qualQuestions: req.body.qualQuestions,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.submitAIanalysisQuestion = (req, res) => {
  ExerciseService.submitAIAnalysisQuestion({
    usersessionid: req.session.token,
    aiAnalysisQuestion: req.body.aiAnalysisQuestion,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.submitHiredCanidates = (req, res) => {
  ExerciseService.submitHiredCanidates({
    usersessionid: req.session.token,
    hiredCanidates: req.body.hiredCanidates,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.submitAIReasoningQuestion = (req, res) => {
  ExerciseService.submitAIReasoningQuestion({
    usersessionid: req.session.token,
    aiReasoningQuestion: req.body.aiReasoningQuestion,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};

exports.submitFixedHiredCanidates = (req, res) => {
  ExerciseService.submitFixedHiredCanidates({
    usersessionid: req.session.token,
    fixedHiredCanidates: req.body.fixedHiredCanidates,
  }).then((id) => {
    req.session.exercise = id;
    res.sendStatus(200);
  });
};
