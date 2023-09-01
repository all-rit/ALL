/* eslint-disable valid-jsdoc */
const db = require('../../database');


/**
 * submitChange(): is a function responsible for retrieving data
 * from lab8 repair.
 * @param {Object} data data representing request payload.
 * @return id for the created entry
 */
async function submitChange(data) {
  const {userId, repair, isComplete} = data;
  try {
    const returnUser = await getRepair(userId);

    if (!returnUser) {
      const updatedChange = {
        userid: userId,
        repair: repair,
        isComplete: isComplete,
      };
      return await db.ExerciseLab8.create(
          updatedChange,
      ).id;
    } else {
      returnUser.repair = repair,
      returnUser.isComplete = isComplete,
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
      where: {userid: data},
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
