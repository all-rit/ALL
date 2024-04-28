const RepairService = require('../../services/lab12/RepairService');

/**
 * submitChange(): is a function that is responsible for
 * handling when a user submits their change to the address repair fields
 * @param {Object} req
 * @param {Object} res
 */
async function submitChange(req, res) {
  const {userID, repair, isComplete, section} = req.body;
  if (userID === '' || section === '' || repair === '') {
    res.status(400); // Bad request status
    return res.json({error: 'Required fields are missing.'});
  } else {
    try {
      const response = await RepairService.submitRepair({
        userID: userID,
        section: section,
        repair: repair,
        isComplete: isComplete,
      });
      return res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.json({error: 'Error: Could not post submit repair.'});
    }
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
