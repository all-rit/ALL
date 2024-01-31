const {Op} = require('sequelize');
const db = require('../database');

const submitStudy = async (data) => {
  const {userID, study} = data;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.study = study;
        user.save();
      } else {
        await db.Imagine23.create({
          userid: userID,
          study: study,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const preSurvey = async (data) => {
  const {userID, preSurvey, section} = data;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.preSurvey = preSurvey;
        user.section = section;
        user.save();
      } else {
        await db.Imagine23.create({
          userid: userID,
          preSurvey: preSurvey,
          section: section,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const postSurvey = async (data) => {
  const {userID, postSurvey} = data;

  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.postSurvey = postSurvey;
        user.save();
      } else {
        await db.Imagine23.create({
          userid: userID,
          postSurvey: postSurvey,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async () => {
  const users = await db.Imagine23.findAll({
    attributes: ['id', 'userid', 'preSurvey'],
    raw: false,
    where: {
      preSurvey: {
        [Op.not]: null,
      },
    },
  });
  return users;
};

const getUserByID = async (data) => {
  try {
    const user = await db.Imagine23.findOne({
      where: {
        userid: data,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

const readMoreCount = async (data) => {
  const {userID, readMoreCount} = data;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.readMoreCount = readMoreCount;
        user.save();
      } else {
        db.Imagine23.create({
          userid: userID,
          readMoreCount: readMoreCount,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};


const readMoreTimeElapsed = async (data) => {
  const {userID, readMoreTimeElapsed} = data;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.readMoreTimeElapsed = readMoreTimeElapsed;
        user.save();
      } else {
        await db.Imagine23.create({
          userid: userID,
          readMoreTimeElapsed: readMoreTimeElapsed,
        });
      }
      return true;
    };
  } catch (error) {
    console.error(error);
  }
};

const readingSectionPagePosition = async (data) => {
  const userID = data.userID;
  const readingSectionPagePosition = data.readingSectionPagePosition;
  try {
    if (userID) {
      const user = await db.Imagine23
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.readingSectionPagePosition = readingSectionPagePosition;
        user.save();
      } else {
        await db.Imagine23.create({
          userid: userID,
          readingSectionPagePosition: readingSectionPagePosition,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  submitStudy,
  preSurvey,
  postSurvey,
  getUsers,
  getUserByID,
  readMoreCount,
  readingSectionPagePosition,
  readMoreTimeElapsed,
};
