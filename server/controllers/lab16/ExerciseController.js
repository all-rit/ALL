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
const postChatReply = async(req,_res) =>{
  try {
     const resp = await ExerciseService.postChatReply(req.body);
    if(!resp){
      throw new Error("Error while posting chat reply");
    }
    return resp;
  } catch (error) {
    console.log(error);
  }
 
};
//Save teammate information needed (new function)

module.exports = {
  getExercise,
  postExercise,
  postChatReply
};
