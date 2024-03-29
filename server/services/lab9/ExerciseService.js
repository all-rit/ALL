const db = require('../../database');
/**
 * getExercise(): is a function that is responsible for retrieving
 * the last played exercise by a particular user. this function is
 * responsible for querying the database and retrieving the correct
 * information from the database.
 * @param {Object} data Contains information about the user to search
 * the database.
 */
async function getExercise(data) {
  try {
    const exerciseResponse = await db.ExerciseLab9.findOne(
        {
          order: [['attemptCount', 'DESC']],
          where: {
            userid: data,
          },
          raw: true,
        },
    );
    return exerciseResponse;
  } catch (error) {
    console.error(error);
  }
}

/**
 * postExercise(): is a function that is responsible for storing
 * changes to the database. This allows the user's information to
 * be properly stored and allow for the ability to be retrieved later
 * when needed.
 * @param {Object} data Contains information that is intended to be stored
 * in the database,
 */
async function postExercise(data) {
  try {
    const {userId, isAddressComplete,
      isDateComplete, isNavComplete,
      isExerciseComplete,
      hasViewed} = data;
    const getExerciseResponse = await getExercise(userId);
    const currentTime = new Date().toISOString();
    const newExercise = {
      userid: userId,
      isAddressComplete: false,
      isDateComplete: false,
      isNavComplete: false,
      isExerciseComplete: false,
      attemptTime: currentTime,
      attemptCount: 1,
      hasViewed: false,
    };
    if (!getExerciseResponse) {
      // adds in new entry
      return await db.ExerciseLab9.create(newExercise).id;
    } else {
      const convert = parseInt(getExerciseResponse.attemptCount);
      const newVal = convert + 1;
      const updatedExercise = {
        userid: userId,
        isAddressComplete: isAddressComplete,
        isDateComplete: isDateComplete,
        isNavComplete: isNavComplete,
        isExerciseComplete: isExerciseComplete,
        attemptTime: currentTime,
        attemptCount: newVal,
        hasViewed: hasViewed,
      };
        // reset state
      return await db.ExerciseLab9.create(updatedExercise).id;
    }
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getExercise,
  postExercise,
};
