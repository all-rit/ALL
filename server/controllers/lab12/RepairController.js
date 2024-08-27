const RepairService = require('../../services/lab12/RepairService');

/**
 * submitChange(): is a function that is responsible for
 * handling when a user submits their change to either
 * the database or form repair fields
 * @param {Object} req
 * @param {Object} res response object. containing information to client
 */
async function submitChange(req, res) {
  try {
    const {userID, repair, isComplete, section} = req.body;
    // eslint-disable-next-line max-len
    if (userID !== '' || repair !== '' || isComplete !== null || section !== '') {
      const response = RepairService.submitRepair({
        userID, repair, section, isComplete,
      });
      return await res.json(response);
    }
  } catch (error) {
    res.status(500).json({error: 'Error: Repair submission failed.'});
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
    const repair = await RepairService.getRepair(userID, section);
    return repair;
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getRepair,
  submitChange,
};
