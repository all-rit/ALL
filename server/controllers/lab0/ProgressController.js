const ProgressService = require('../../services/lab0/ProgressService');

/**
 * TBD
 * @param {Object} req TBD
 * @return {Object} The user's progress grouped by the section categories
 */
async function getProgress(req) {
  try {
    const {userID} = req.params;
    return await ProgressService.getProgress(userID);
  } catch (error) {
    console.error(error);
  }
}

/**
 * TBD
 * @param {Object} req TBD
 */
async function submitProgress(req) {
  try {
    const {userID, category, section, sectionStatus} = req.body;
    await ProgressService.submitProgress(
        userID,
        category,
        section,
        sectionStatus,
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getProgress,
  submitProgress,
};
