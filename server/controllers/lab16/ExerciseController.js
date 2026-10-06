const ExerciseService = require('../../services/lab16/ExerciseService');

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

//Save Chat Reply needed (from Imagine 2026)

//Save teammate information needed (new function)

async function saveTeammateInformation(req){
  try {
    const data = req.body
    const response = await ExerciseService.saveTeammateInformation(data)
    return response;
  } catch (error) {
    console.error(error);
  }

  
}

module.exports = {
  getExercise,
  postExercise,
  saveTeammateInformation
};
