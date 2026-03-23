const ExerciseService = require('../../services/lab15/ExerciseService');

async function getExercise(req) {
  try {
    const {userID} = req.params;
    return await ExerciseService.getExercise(userID);
  } catch (error) {
    console.error('Error: Could Not Find Exercise', error);
  }
}

async function postExercise(req) {
  try {
    const {userID, hasViewed, isExerciseComplete} = req.body;
    const response = await ExerciseService.postExercise({
      userId: userID,
      hasViewed: hasViewed,
      isExerciseComplete: isExerciseComplete,
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
