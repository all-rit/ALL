const RepairService = require('../../services/lab15/RepairService');

async function submitChange(req) {
  try {
    const {userID, repair, isComplete, section} = req.body;
    if (userID !== '' || repair !== '' || isComplete !== null || section !== '') {
      const response = RepairService.submitRepair({
        userID,
        repair,
        section,
        isComplete,
      });
      return response;
    }
  } catch (error) {
    console.error('Error submitting change: ', error);
  }
}

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
