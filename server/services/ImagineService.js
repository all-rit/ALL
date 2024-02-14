/* eslint-disable no-unused-vars */
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


const determineGroup = async (data) => {
  const {preSurvey} = data;
  // retrieve all existing groupings
  const getCategories = async (category) => {
    const output = {};
    const responses = await db.Imagine23.findAll({
      where: category,
    });
    responses.forEach((response) => {
      const userResponse = response.map((question, index) => {
        // leaves in maintainability for adding in demo field
        if (index === 0 || index === 1 || index === 5) {
          return question.answer;
        }
      });
      const userResponses = userResponse.flat().toString();
      output[userResponses] = (output[userResponses] || 0) + 1;
    });
    return output;
  };
  const experiential = await getCategories('experiential');
  const discomfortCountPOC = await getCategories('discomfortCountPOC');
  const discomfortCountNonPOC = await getCategories('discomfortCountNonPOC');
  const control = await getCategories('control');
  // repeats the same flattening for the user.
  const userResponse = preSurvey.map((question, index) => {
    if (index === 0 || index === 1 || index === 5) {
      return question.answer;
    }
  }).flat().toString();
  let minValue = Infinity;
  let lowestPool = '';

  // Iterate over each hashmap to find the lowest value
  for (const [pool, hashmap] of [['experiential', experiential],
    ['discomfortCountPOC', discomfortCountPOC],
    ['discomfortCountNonPOC', discomfortCountNonPOC],
    ['control', control]]) {
    // Check if the key exists in the hashmap
    if (userResponse in hashmap) {
      // Compare the value with the current minimum value
      if (hashmap[userResponse] < minValue) {
        minValue = hashmap['key1'];
        lowestPool = pool;
      }
    }
  }
  // get users answers
  return lowestPool;
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
