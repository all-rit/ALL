/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
const db = require('../database');

completeAbout= (data)=>{
  const usersessionid = data.usersessionid;
  const labid = data.labid;
  const datetime = data.date;
  if (usersessionid) {
    return db.UserLab
        .findOne({
          where:
                        {
                          usersessionid: usersessionid,
                          labid: labid,
                        },
        },
        ).then((userlab)=> {
          if (userlab !== null) {
            userlab.aboutcompletedtime = datetime;
            userlab.save();
          } else {
            db.UserLab.create({
              usersessionid: usersessionid,
              labid: labid,
              aboutcompletedtime: datetime,
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

completeReading= (data)=>{
  const usersessionid = data.usersessionid;
  const labid = data.labid;
  const datetime = data.date;
  if (usersessionid) {
    return db.UserLab
        .findOne({
          where:
                        {
                          usersessionid: usersessionid,
                          labid: labid,
                        },
        },
        ).then((userlab)=> {
          if (userlab !== null) {
            userlab.readingcompletedtime = datetime;
            userlab.save();
          } else {
            db.UserLab.create({
              usersessionid: usersessionid,
              labid: labid,
              readingcompletedtime: datetime,
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

completeExercise = (data)=> {
  const usersessionid = data.usersessionid;
  const labid = data.labid;
  const datetime = data.date;
  if (usersessionid) {
    return db.UserLab
        .findOne({
          where:
                        {
                          usersessionid: usersessionid,
                          labid: labid,
                        },
        },
        ).then((userlab) => {
          if (userlab !== null) {
            userlab.exercisecompletedtime = datetime;
            userlab.save();
          } else {
            db.UserLab.create({
              usersessionid: usersessionid,
              labid: labid,
              exercisecompletedtime: datetime,
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

completeReinforcement = (data)=>{
  const usersessionid = data.usersessionid;
  const labid = data.labid;
  const datetime = data.date;
  if (usersessionid) {
    return db.UserLab
        .findOne({
          where:
                        {
                          usersessionid: usersessionid,
                          labid: labid,
                        },
        },
        ).then((userlab)=> {
          if (userlab !== null) {
            userlab.reinforcementcompletedtime = datetime;
            userlab.save();
          } else {
            db.UserLab.create({
              usersessionid: usersessionid,
              labid: labid,
              reinforcementcompletedtime: datetime,
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

completeQuiz= (data)=>{
  const usersessionid = data.usersessionid;
  const labid = data.labid;
  const datetime = data.date;
  const quizscore = data.quizscore;
  const quizresult = data.quizresult;
  if (usersessionid) {
    return db.UserLab
        .findOne({
          where:
                        {
                          usersessionid: usersessionid,
                          labid: labid,
                        },
        },
        ).then((userlab)=> {
          if (userlab !== null) {
            if (userlab.quizscore <= quizscore) {
              userlab.quizcompletedtime = datetime;
              userlab.quizresult = quizresult;
              userlab.quizscore = quizscore;
              userlab.save();
            }
          } else {
            db.UserLab.create({
              usersessionid: usersessionid,
              labid: labid,
              quizcompletedtime: datetime,
              quizresult: quizresult,
              quizscore: quizscore,
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

userCompleteAbout= (data)=>{
  const userid = data.userid;
  const labid = data.labid;
  const datetime = data.date;
  if (userid) {
    return db.UserLabCompletion
        .findOne({
          where:
                        {
                          userid: userid,
                          labid: labid,
                        },
        },
        ).then((userlabcompletion)=> {
          if (userlabcompletion !== null) {
            if (userlabcompletion.aboutcompletedtime === null) {
              userlabcompletion.aboutcompletedtime = datetime;
              if (userlabcompletion.aboutcompletedtime!==null &&
                            userlabcompletion.readingcompletedtime!==null &&
                            userlabcompletion.exercisecompletedtime!==null &&
                            userlabcompletion.reinforcementcompletedtime!==null &&
                            userlabcompletion.quizcompletedtime!==null) {
                userlabcompletion.labcompletiontime=datetime;
              }
              userlabcompletion.save();
            }
          } else {
            db.UserLabCompletion.create({
              userid: userid,
              labid: labid,
              aboutcompletedtime: datetime,
              labstarttime: datetime,
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

userCompleteReading = (data)=>{
  const userid = data.userid;
  const labid = data.labid;
  const datetime = data.date;
  if (userid) {
    return db.UserLabCompletion
        .findOne({
          where:
                        {
                          userid: userid,
                          labid: labid,
                        },
        },
        ).then((userlabcompletion)=> {
          if (userlabcompletion !== null) {
            if (userlabcompletion.readingcompletedtime === null) {
              userlabcompletion.readingcompletedtime = datetime;
              if (userlabcompletion.aboutcompletedtime!==null &&
                            userlabcompletion.readingcompletedtime!==null &&
                            userlabcompletion.exercisecompletedtime!==null &&
                            userlabcompletion.reinforcementcompletedtime!==null &&
                            userlabcompletion.quizcompletedtime!==null) {
                userlabcompletion.labcompletiontime=datetime;
              }
              userlabcompletion.save();
            }
          } else {
            db.UserLabCompletion.create({
              userid: userid,
              labid: labid,
              readingcompletedtime: datetime,
              labstarttime: datetime,
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

userCompleteExercise = (data)=> {
  const userid = data.userid;
  const labid = data.labid;
  const datetime = data.date;
  if (userid) {
    return db.UserLabCompletion
        .findOne({
          where:
                        {
                          userid: userid,
                          labid: labid,
                        },
        },
        ).then((userlabcompletion) => {
          if (userlabcompletion !== null) {
            if (userlabcompletion.exercisecompletedtime === null) {
              userlabcompletion.exercisecompletedtime = datetime;
              if (userlabcompletion.aboutcompletedtime!==null &&
                            userlabcompletion.readingcompletedtime!==null &&
                            userlabcompletion.exercisecompletedtime!==null &&
                            userlabcompletion.reinforcementcompletedtime!==null &&
                            userlabcompletion.quizcompletedtime!==null) {
                userlabcompletion.labcompletiontime=datetime;
              }
              userlabcompletion.save();
            }
          } else {
            db.UserLabCompletion.create({
              userid: userid,
              labid: labid,
              exercisecompletedtime: datetime,
              labstarttime: datetime,
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

userCompleteReinforcement = (data)=>{
  const userid = data.userid;
  const labid = data.labid;
  const datetime = data.date;
  if (userid) {
    return db.UserLabCompletion
        .findOne({
          where:
                        {
                          userid: userid,
                          labid: labid,
                        },
        },
        ).then((userlabcompletion)=> {
          if (userlabcompletion !== null) {
            if (userlabcompletion.reinforcementcompletedtime === null) {
              userlabcompletion.reinforcementcompletedtime = datetime;
              if (userlabcompletion.aboutcompletedtime!==null &&
                            userlabcompletion.readingcompletedtime!==null &&
                            userlabcompletion.exercisecompletedtime!==null &&
                            userlabcompletion.reinforcementcompletedtime!==null &&
                            userlabcompletion.quizcompletedtime!==null) {
                userlabcompletion.labcompletiontime=datetime;
              }
              userlabcompletion.save();
            }
          } else {
            db.UserLabCompletion.create({
              userid: userid,
              labid: labid,
              reinforcementcompletedtime: datetime,
              labstarttime: datetime,
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

userCompleteQuiz = (data)=>{
  const userid = data.userid;
  const labid = data.labid;
  const datetime = data.date;
  const quizscore = data.quizscore;
  if (userid) {
    return db.UserLabCompletion
        .findOne({
          where:
                        {
                          userid: userid,
                          labid: labid,
                        },
        },
        ).then((userlabcompletion)=> {
          if (userlabcompletion !== null) {
            if (userlabcompletion.quizscore <= quizscore) {
              userlabcompletion.quizcompletedtime = datetime;
              userlabcompletion.quizscore = quizscore;
              if (userlabcompletion.aboutcompletedtime!==null &&
                            userlabcompletion.readingcompletedtime!==null &&
                            userlabcompletion.exercisecompletedtime!==null &&
                            userlabcompletion.reinforcementcompletedtime!==null &&
                            userlabcompletion.quizcompletedtime!==null) {
                userlabcompletion.labcompletiontime=datetime;
              }
              userlabcompletion.save();
            }
          } else {
            db.UserLabCompletion.create({
              userid: userid,
              labid: labid,
              quizcompletedtime: datetime,
              quizscore: quizscore,
              labstarttime: datetime,
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


getUserLabCompletion = (data) => {
  if (data.userid) {
    return db.UserLabCompletion
        .findOne({
          where:
					{
					  userid: data.userid,
					  labid: data.labid,
					},
        }).then((userlabcompletion) => {
          return userlabcompletion;
        })
        .catch((err) => {
          console.log(err);
        });
  }
  return Promise.resolve();
};

getUserLabRecords = async (userid) => {
  try {
    if (userid) {
      return db.sequelize.query(
          `SELECT * FROM "userlabcompletion" 
			JOIN "labs" ON  "userlabcompletion"."labid"="labs"."id" 
			WHERE "userlabcompletion"."userid"=(:userID)
		    `, {
            replacements: {userID: userid},
            type: db.sequelize.QueryTypes.SELECT,
            raw: true,
          });
    }
  } catch (error) {
    console.warn('Error getting user lab records', error);
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
