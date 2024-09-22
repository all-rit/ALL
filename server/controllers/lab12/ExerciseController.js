const ExerciseService = require('../../services/lab12/ExerciseService');
// eslint-disable-next-line valid-jsdoc
/**
 * getExercise(): is a function responsible for retrieving the
 * user id from the query params from the route to the endpoint.
 * this allows for the ability to retrieve the last game state.
 * @param {Object} req request object containing userId;
 * @param {Object} res response object containing the response;
 */
async function getExercise(req) {
  try {
    const {userID} = req.params;
    return await ExerciseService.getExercise(userID);
  } catch (error) {
    console.error('Error: Could Not Find Exercise', error);
  }
}

/**
 * postExercise(): is a function that is responsible for sending the
 * user's state to the database for when they are completed with a section
 * of the lab's repair. This function is responsible for getting the contents
 * of the body of the request and pass it off to the Exercise service.
 * @param {Object} req request object containing user information and payload.
 * @param {Object} res response object containing the response;
 */
async function postExercise(req) {
  try {
    const {userID, isDatabaseRepairComplete, isFormRepairComplete,
      isExerciseComplete, hasViewed} = req.body;
    const response = await ExerciseService.postExercise({
      userId: userID,
      isFormRepairComplete: isFormRepairComplete,
      isDatabaseRepairComplete: isDatabaseRepairComplete,
      isExerciseComplete: isExerciseComplete,
      hasViewed: hasViewed,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getExercise,
  postExercise,
};