const RepairService = require('../../services/lab8/ExerciseService');

/**
 * submitChange(): is a function responsible for handling when a user
 * submits their changes to their sentiment scores for Lab 8.
 * @param {Object} req request object that is received
 * @param {Object} res response that is returned
 */
async function submitChange(req, res) {
  try {
    const {userid, repair, isComplete} = req.body;

    await RepairService.submitChange({
      userid: userid,
      repair: repair,
      isComplete: isComplete,
    });
    res.sendStatus(200);
  } catch (error) {

  }
}
/**
 * getRepair(): is a function that is responsible for retrieving
 * the player's previous repair to be used for them to update then again.
 * @param {Object} req request object that is received
 * @param {Object} res response that is returned
 */
async function getRepair(req, res) {
  const raw = true;
  try {
    const {userid} = req.params;
    const recordRepair = await RepairService.getRepair(userid, raw);
    res.json(recordRepair);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
}

module.export = {
  getRepair,
  submitChange,
};
