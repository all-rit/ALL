/* eslint-disable max-len */
const db = require('../database');
const shortNameNotFound = 'Error: Short Name Not Found';
const shortNameNotRetrieved= 'Error: Short Name Not Retrieved';
const aboutNotFound = 'Error: About Not Found';
const aboutNotRetrieved = 'Error: About Not Retrieved';
const readingNotFound = 'Error: Reading Not Found';
const readingNotRetrieved = 'Error: Reading Not Retrieved';
const reinforcementNotFound = 'Error: Reinforcement Not Found';
const reinforcementNotRetrieved = 'Error: Reinforcement Not Retrieved';
const quizNotFound = 'Error: Quiz Not Found';
const quizNotRetrieved = 'Error: Quiz Not Retrieved';


/**
 * getAllLabs(): Get all Labs and information.
 * @return {Array<Object>} list of Objects for each of the Labs
 */
async function getAllLabs() {
  return await db.Labs.findAll({
    raw: true,
  });
};
/**
 * getLabShortName(): Get the short name of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {String} the short name of the lab.
 */
async function getLabShortName(labID) {
  try {
    const shortName = await db.Labs.findOne({
      where: {id: labID},
      attributes: ['labShortName'],
      raw: true,
    });
    if (!shortName) {
      return shortNameNotFound;
    }
    return shortName;
  } catch (error) {
    console.error(error);
    return shortNameNotRetrieved;
  }
};
/**
 * getLabAbout(): Get the about section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the about section of the lab
 */
async function getLabAbout(labID) {
  try {
    const about = await db.Labs.findOne({
      where: {id: labID},
      attributes: ['about'],
      raw: true,
    });
    if (!about) {
      return aboutNotFound;
    }
    return about;
  } catch (error) {
    console.error(error);
    return aboutNotRetrieved;
  };
};
/**
 * getLabReading(): Get the reading section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the reading section of the lab.
 */
async function getLabReading(labID) {
  try {
    const reading = await db.Labs.findOne({
      where: {id: labID},
      attributes: ['reading'],
      raw: true,
    });
    if (!reading) {
      return readingNotFound;
    }
    return reading;
  } catch (error) {
    console.error(error);
    return readingNotRetrieved;
  };
};
/**
 * getLabReinforcement(): Get the reinforcement section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the reinforcement section of the lab.
 */
async function getLabReinforcement(labID) {
  try {
    const reinforcement = await db.Labs.findOne({
      where: {id: labID},
      attributes: ['reinforcement'],
      raw: true,
    });
    if (!reinforcement) {
      return reinforcementNotFound;
    }
    return reinforcement;
  } catch (error) {
    console.error(error);
    return reinforcementNotRetrieved;
  }
};
/**
 * getLabQuiz(): Get the quiz section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the quiz section of the lab.
 */
async function getLabQuiz(labID) {
  try {
    const quiz = await db.Labs.findOne({
      where: {id: labID},
      attributes: ['quiz'],
      raw: true,
    });
    if (!quiz) {
      return quizNotFound;
    }
    return quiz;
  } catch (error) {
    console.error(error);
    return quizNotRetrieved;
  }
};


module.exports = {
  getAllLabs,
  getLabShortName,
  getLabAbout,
  getLabReading,
  getLabReinforcement,
  getLabQuiz,
};
