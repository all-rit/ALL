const RepairService = require('../../services/lab9/DateRepairService');

/**
 * submitChange(): is a function that is responsible for
 * handling when a user submits their change to the address repair fields
 * @param {Object} req
 */
async function submitChange(req) {
  try {
    const {userId, repair, isComplete} = req.body;
    return await RepairService.submitRepair({
      userId, repair, isComplete,
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * getRepair(): is a function that is responsible
 * for handling retrieving the last recorded
 * state of a users repair when request
 * @param {Object} req
 */
async function getRepair(req) {
  const {userID} = req.params;
  try {
    const repair = await RepairService.getRepair(userID);
    return repair;
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getRepair,
  submitChange,
};
