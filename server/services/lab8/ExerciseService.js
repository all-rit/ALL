/* eslint-disable valid-jsdoc */
const db = require('../../database');


/**
 * submitChange(): is a function responsible for retrieving data
 * from lab8 repair.
 * @param {Object} data data representing request payload.
 * @return id for the created entry
 */
async function submitChange(data) {
  const {userId, repair, isComplete, numRepair} = data;
  let localRepair = parseInt(numRepair);
  localRepair += 1;
  try {
    const returnUser = await getRepair(userId);

    if (!returnUser) {
      const updatedChange = {
        userid: userId,
        repair: repair,
        isComplete: isComplete,
        numRepair: 1,
      };
      return await db.ExerciseLab8.create(
          updatedChange,
      ).id;
    } else {
      returnUser.repair = repair,
      returnUser.isComplete = isComplete,
      returnUser.numRepair = localRepair,
      await returnUser.save();
      return data.id;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * getRepair is responsible for returning the previous repair's
 * recorded entry.
 * @param {Object} data object storing information from the request
 * @param {boolean} raw indicate use of raw flag
 * @return represented information either in string or object form
 */
async function getRepair(data, raw=false) {
  try {
    return await db.ExerciseLab8.findOne({
      where: {userid: data, isComplete: false},
      raw: raw,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  submitChange,
  getRepair,
};
