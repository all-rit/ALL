const {Op} = require('sequelize');
const db = require('../database');

const submitStudy = async (data) => {
  const {userID, section, study} = data;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
            section: section,
          },
          });
      if (user !== null) {
        user.study = study;
        user.save();
      } else {
        db.Imagine23.create({
          userid: userID,
          study: study,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const preSurvey = (data) => {
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

const postSurvey = (data) => {
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

const getUsers = () => {
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

const readMoreCount = (data) => {
  const userID = data.userID;
  const readMoreCount = data.readMoreCount;

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
            user.readMoreCount = readMoreCount;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              readMoreCount: readMoreCount,
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


const readMoreTimeElapsed = (data) => {
  const userID = data.userID;
  const readMoreTimeElapsed = data.readMoreTimeElapsed;

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
            user.readMoreTimeElapsed = readMoreTimeElapsed;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              readMoreTimeElapsed: readMoreTimeElapsed,
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

const readingSectionPagePosition = (data) => {
  const userID = data.userID;
  const readingSectionPagePosition = data.readingSectionPagePosition;

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
            user.readingSectionPagePosition = readingSectionPagePosition;
            user.save();
          } else {
            db.Imagine23.create({
              userid: userID,
              readingSectionPagePosition: readingSectionPagePosition,
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

module.exports = {
  submitStudy,
  preSurvey,
  postSurvey,
  getUsers,
  readMoreCount,
  readingSectionPagePosition,
  readMoreTimeElapsed,
};
