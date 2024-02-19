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
  const {userID, preSurvey} = data;
  try {
    const section = await determineGroup(preSurvey);
    if (userID) {
      const user = await getUserByID(userID);
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
  // retrieve all existing groupings
  const getCategories = async (category) => {
    const output = {};
    const responses = await db.Imagine23.findAll({
      where: category,
    }).preSurvey;
    if (!responses) {
      return {};
    }
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
  const userResponse = data.map((question, index) => {
    if (index === 0 || index === 1 || index === 5) {
      return question.answer.index;
    }
  }).toString();

  let minValue = Infinity;
  let lowestPool = '';
  const dataset = [['experiential', experiential],
    ['discomfortCountPOC', discomfortCountPOC],
    ['discomfortCountNonPOC', discomfortCountNonPOC],
    ['control', control]];
  // Iterate over each hashmap to find the lowest value
  for (const [pool, hashmap] of dataset) {
    // Check if the key exists in all the hashmaps
    if (userResponse in dataset[0][1] ||
      userResponse in dataset[1][1] ||
      userResponse in dataset[2][1] ||
      userResponse in dataset[3][1]) {
      if (userResponse in hashmap) {
        // Compare the value with the current minimum value
        if (hashmap[userResponse] < minValue) {
          minValue = hashmap[userResponse];
          lowestPool = pool;
        }
      }
    } else {
      // randomly generate number from 0-3
      const groupSelector = Math.floor(Math.random() * 4);
      return String(dataset[groupSelector][0]);
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
