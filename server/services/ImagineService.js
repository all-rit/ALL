const {Op} = require('sequelize');
const db = require('../database');

exports.discomfortCount = (data)=> {
  const userID = data.userID;
  const discomfortCount = data.discomfortCount;
  if (userID) {
    return db.Imagine23
        .findOne({
          where:
                        {
                          userid: userID,
                        },
        },
        ).then((user) => {
          if (user !== null) {
            user.discomfortCount = discomfortCount;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              discomfortCount: discomfortCount,
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

exports.experientialMain = (data)=> {
  const userID = data.userID;
  const experientialMain = data.experientialMain;
  if (userID) {
    return db.Imagine23
        .findOne({
          where:
                        {
                          userid: userID,
                        },
        },
        ).then((user) => {
          if (user !== null) {
            user.experientialMain = experientialMain;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              experientialMain: experientialMain,
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


exports.experientialProtanopia = (data)=> {
  const userID = data.userID;
  const experientialProtanopia = data.experientialProtanopia;
  if (userID) {
    return db.Imagine23
        .findOne({
          where:
                        {
                          userid: userID,
                        },
        },
        ).then((user) => {
          if (user !== null) {
            user.experientialProtanopia = experientialProtanopia;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              experientialProtanopia: experientialProtanopia,
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

exports.preSurvey = (data) => {
  const userID = data.userID;
  const preSurvey = data.preSurvey;
  if (userID) {
    return db.Imagine23
        .findOne({
          where:
                        {
                          userid: userID,
                        },
        },
        ).then((user) => {
          if (user !== null) {
            user.preSurvey = preSurvey;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              preSurvey: preSurvey,
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

exports.postSurvey = (data) => {
  const userID = data.userID;
  const postSurvey = data.postSurvey;
  if (userID) {
    return db.Imagine23
        .findOne({
          where:
                        {
                          userid: userID,
                        },
        },
        ).then((user) => {
          if (user !== null) {
            user.postSurvey = postSurvey;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              postSurvey: postSurvey,
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

exports.getUsers = () => {
  return db.Imagine23.findAll({
    attributes: ['id', 'userid', 'preSurvey'],
    raw: true,
    where: {
      preSurvey: {
        [Op.not]: null,
      },
    },
  });
};
