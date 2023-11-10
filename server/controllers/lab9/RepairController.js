const RepairService = require('../../services/lab9/RepairService');

/**
 * submitChange(): is a function that is responsible for
 * handling when a user submits their change to the address repair fields
 * @param {Object} req
 */
async function submitChange(req) {
  try {
    const {userId, repair, isComplete, numRepair, section} = req.body;
    return await RepairService.submitRepair({
      userId, repair, isComplete, numRepair, section,
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * getRepair(): is a function that is responsible
 * for handling retrieving the last recorded
 * state of a users repair when request
 * @param {Object} req request object sent to retrieve repair
 * information.
 */
async function getRepair(req) {
  try {
    const {userID, section} = req.params;
    const repair = await RepairService.getRepair(userID,
        section);
    return repair;
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getRepair,
  submitChange,
};
