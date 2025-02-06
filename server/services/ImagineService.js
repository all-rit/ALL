const {Op} = require('sequelize');
const db = require('../database');

const submitStudy = async (data) => {
  const {userID, study, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine]
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
        await db[imagine].create({
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
  const {userID, preSurvey, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const section = await determineGroup(preSurvey, year);
      const user = await getUserByID(userID, year);
      console.warn(section, user);
      if (user) {
        user.preSurvey = preSurvey;
        user.section = section;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          preSurvey: preSurvey,
          section: section,
        });
      }
      return section;
    }
  } catch (error) {
    console.error(error);
  }
};

const postSurvey = async (data) => {
  const {userID, postSurvey, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine]
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
        await db[imagine].create({
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
  // const imagine = `Imagine${year}`;
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
  const {userID, year} = data;
  const imagine = `Imagine${year}`;
  try {
    const user = await db[imagine].findOne({
      where: {
        userid: userID,
      },
    });
    return user;
  } catch (error) {
    console.error('Could not get user by ID: ', error);
  }
};

const readMoreCount = async (data) => {
  const {userID, readMoreCount, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine]
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
        db[imagine].create({
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
  const {userID, readMoreTimeElapsed, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine]
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
        await db[imagine].create({
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
  const {userID, year} = data;
  const imagine = `Imagine${year}`;
  const readingSectionPagePosition = data.readingSectionPagePosition;
  try {
    if (userID) {
      const user = await db[imagine]
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
        await db[imagine].create({
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

const getSection = async (sectionName, year) => {
  const imagine = `Imagine${year}`;
  try {
    const output = {};
    const responses = await db[imagine].findAll({
      where: {
        section: {
          [Op.eq]: sectionName,
        },
      },
      raw: true,
    });

    if (!responses) {
      return {};
    }
    responses.forEach((response) => {
      const survey = response.preSurvey;
      const userResponse = survey.map((question, index) => {
        // leaves in maintainability for adding in demo field
        if (index === 0 || index === 1 || index === 5) {
          return question.answer;
        }
      });
      const userResponses = userResponse.flat().toString().replace(/,/g, '');
      output[userResponses] = (output[userResponses] || 0) + 1;
    });
    return output;
  } catch (error) {
    console.error(error);
  }
};

const determineGroup = async (preSurvey, year) => {
  // retrieve all existing groupings
  const experiential = await getSection('experiential', year);
  const discomfortCountPOC = await getSection('discomfortCountPOC', year);
  const discomfortCountNonPOC = await getSection('discomfortCountNonPOC', year);
  const control = await getSection('control', year);
  // repeats the same flattening for the user.
  const userResponse = preSurvey.map((question, index) => {
    if (index === 0 || index === 1 || index === 5) {
      return question.answer;
    }
  }).toString().replace(/,/g, '');

  let minValue = Infinity;
  let lowestPool = '';
  const dataset = [['experiential', experiential],
    ['discomfortCountPOC', discomfortCountPOC],
    ['discomfortCountNonPOC', discomfortCountNonPOC],
    ['control', control]];
  // Iterate over each hashmap to find the lowest value
  for (const [pool, hashmap] of dataset) {
    // if user response is in the hashmap
    // Ex: [(userResponse, count) ('232', 3)]
    // then bubble sort on count
    if (userResponse in hashmap) {
      // Compare the value with the current minimum value
      if (hashmap[userResponse] < minValue) {
        minValue = hashmap[userResponse];
        lowestPool = pool;
      }
    } else {
      // else the lowest count for this pool is 0
      minValue = 0;
      lowestPool = pool;
    }
  }
  // get users answers
  return lowestPool;
};

const postUserAvatar = async (data) => {
  const {userID, avatar, year} = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine]
          .findOne({
            where:
          {
            userid: userID,
          },
          });
      if (user !== null) {
        user.avatar = avatar;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          avatar: avatar,
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
  postUserAvatar,
};
