const ExerciseService = require('../../services/lab12/ExerciseService');
/**
 * getExercise(): is a function responsible for retrieving the
 * user id from the query params from the route to the endpoint.
 * this allows for the ability to retrieve the last game state.
 * @param {Object} req request object containing userId;
 */
async function getExercise(req) {
  try {
    const {userID} = req.params;
    return await ExerciseService.getExercise(userID);
  } catch (error) {
    console.error(error);
  }
}

/**
 * postExercise(): is a function that is responsible for sending the
 * user's state to the database for when they are completed with a section
 * of the lab's repair. This function is responsible for getting the contents
 * of the body of the request and pass it off to the Exercise service.
 * @param {Object} req request object containing user information and payload.
 */
async function postExercise(req) {
  try {
    const {userID, isAddressComplete, isDateComplete, isNavComplete,
      isExerciseComplete, hasViewed} = req.body;
    const responseId = await ExerciseService.postExercise({
      userId: userID,
      isAddressComplete: isAddressComplete,
      isDateComplete: isDateComplete,
      isNavComplete: isNavComplete,
      isExerciseComplete: isExerciseComplete,
      hasViewed: hasViewed,
    }).id;
    return responseId;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getExercise,
  postExercise,
};
