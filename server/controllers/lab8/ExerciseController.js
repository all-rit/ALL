const ExerciseService = require('../../services/lab8/ExerciseService');

/**
 * submitChange(): is a function responsible for handling when a user
 * submits their changes to their sentiment scores for Lab 8.
 * @param {Object} req request object that is received
 */
async function submitChange(req) {
  try {
    const {userId, repair, isComplete, numRepair} = req.body;

    return await ExerciseService.submitChange({
      userId: userId,
      repair: repair,
      isComplete: isComplete,
      numRepair: numRepair,
    }).id;
  } catch (error) {
    console.error(error);
  }
}
/**
 * getRepair(): is a function that is responsible for retrieving
 * the player's previous repair to be used for them to update then again.
 * @param {Object} req request object that is received
 */
async function getRepair(req) {
  const raw = true;
  try {
    const {userID} = req.params;
    const recordRepair = await ExerciseService.getRepair(userID, raw);
    return recordRepair;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  submitChange,
  getRepair,
};
