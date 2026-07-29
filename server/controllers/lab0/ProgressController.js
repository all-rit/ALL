const ProgressService = require('../../services/lab0/ProgressService');

/**
 * Parses the request's query parameters,
 * and passes the userID to the ProgressService.
 * @param {Object} req The HTTP request
 * @return {Object} The user's progress grouped by section category
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
 * Parses the request's body, and passes the
 * data to the ProgressService.
 * @param {Object} req The HTTP request
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
