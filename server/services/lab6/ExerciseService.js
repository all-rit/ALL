const db = require('../../database');
exports.submitAvatar = (data) => {
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.avatar = data.avatar;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          avatar: data.avatar,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};

exports.submitQualQuestions = (data) => {
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.qualificationquestions = data.qualQuestions;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          qualificationquestions: data.qualQuestions,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};

exports.submitAIAnalysisQuestion = (data) => {
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.aianalysisquestion = data.aiAnalysisQuestion;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          aianalysisquestion: data.aiAnalysisQuestion,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};

exports.submitHiredCanidates = (data) => {
  console.log('\n\n\n\n\n\n\n\n\n\n', data);
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.hiredcanidates = data.hiredCanidates;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          hiredcanidates: data.hiredCanidates,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};

exports.submitAIReasoningQuestion = (data) => {
  console.log('\n\n\n\n\n\n\n\n\n\n', data);
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.aireasoningquestion = data.aiReasoningQuestion;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          aireasoningquestion: data.aiReasoningQuestion,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};

exports.submitFixedHiredCanidates = (data) => {
  if (data.usersessionid) {
    return db.ExerciseLab6.findOne({
      where:
                        {
                          usersessionid: data.usersessionid,
                        },
    },
    ).then((user) => {
      if (user !== null) {
        user.fixedhiredcanidates = data.fixedHiredCanidates;
        user.save();
      } else {
        db.ExerciseLab6.create({
          usersessionid: data.usersessionid,
          fixedhiredcanidates: data.fixedHiredCanidates,
        });
      }
      return true;
    }).catch((err) => {
      console.log(err);
      return true;
    });
  }
  return Promise.resolve();
};
