/* eslint-disable max-len */
const db = require('../database');

/**
 * getAllLabs(): Get all labs and information.
 * @return {Array<Object>} list of Objects for each of the labs
 */
async function getAllLabs() {
  return await db.labs.findAll({
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
    const shortName = await db.labs.findOne({
      where: {id: labID},
      attributes: ['labShortName'],
      raw: true,
    });
    return shortName.labShortName;
  } catch (error) {
    console.error(error);
    return 'Error: Short Name Not Found';
  }
};
/**
 * getLabAbout(): Get the about section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the about section of the lab
 */
async function getLabAbout(labID) {
  try {
    const about = await db.labs.findOne({
      where: {id: labID},
      attributes: ['about'],
      raw: true,
    });
    return about.about;
  } catch (error) {
    console.error(error);
    return 'Error: About Not Found';
  };
};
/**
 * getLabReading(): Get the reading section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the reading section of the lab.
 */
async function getLabReading(labID) {
  try {
    const reading = await db.labs.findOne({
      where: {id: labID},
      attributes: ['reading'],
      raw: true,
    });
    return reading.reading;
  } catch (error) {
    console.error(error);
    return 'Error: Reading Not Found';
  };
};
/**
 * getLabReinforcement(): Get the reinforcement section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the reinforcement section of the lab.
 */
async function getLabReinforcement(labID) {
  try {
    const reinforcement = await db.labs.findOne({
      where: {id: labID},
      attributes: ['reinforcement'],
      raw: true,
    });
    return reinforcement.reinforcement;
  } catch (error) {
    console.error(error);
    return 'Error: Reinforcement Not Found';
  }
};
/**
 * getLabQuiz(): Get the quiz section of the lab.
 * @param {Number} labID - the ID of the lab.
 * @return {Object} the quiz section of the lab.
 */
async function getLabQuiz(labID) {
  try {
    const quiz = await db.labs.findOne({
      where: {id: labID},
      attributes: ['quiz'],
      raw: true,
    });
    return quiz.quiz;
  } catch (error) {
    console.error(error);
    return 'Error: Quiz Not Found';
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
