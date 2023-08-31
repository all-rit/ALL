/* eslint-disable valid-jsdoc */
const db = require('../../database');


/**
 * submitChange(): is a function responsible for retrieving data
 * from lab8 repair.
 * @param {Object} data data representing request payload.
 * @return id for the created entry
 */
async function submitChange(data) {
  const {userid, repair, isComplete} = data;
  try {
    const returnUser = await getRepair(data);

    if (!returnUser) {
      const updatedChange = {
        userid: userid,
        repair: repair,
        isComplete: isComplete,
      };
      return await db.RepairLab8.create(
          updatedChange,
      ).id;
    } else {
      returnUser.repair = repair,
      returnUser.isComplete = repair,
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
 * @param {Object} data object storing infromation from the request
 * @param {boolean} raw indicate use of raw flag
 * @return represented infomration either in string or object form
 */
async function getRepair(data, raw=false) {
  const {userid} = data;
  try {
    return await db.RepairLab8.findOne({
      where: {userid: userid},
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
