const db = require('../../database');

async function getExercise(data) {
  try {
    const exerciseResponse = await db.ExerciseLab15.findOne({
      order: [['attemptTime', 'DESC']],
      where: {
        userid: data,
      },
      raw: true,
    });

    return exerciseResponse;
  } catch (error) {
    console.error(error);
  }
}

async function postExercise(data) {
  try {
    const {
      userId,
      isExerciseComplete,
      hasViewed,
    } = data;
    const getExerciseResponse = await getExercise(userId);
    const currentTime = new Date().toISOString();
    const newExercise = {
      userid: userId,
      isExerciseComplete: false,
      attemptTime: currentTime,
      attemptCount: 1,
      hasViewed: false,
    };

    if (!getExerciseResponse) {
      return await db.ExerciseLab15.create(newExercise).id;
    }

    const convert = parseInt(getExerciseResponse.attemptCount);
    const newVal = convert + 1;
    const updatedExercise = {
      userid: userId,
      isExerciseComplete: isExerciseComplete,
      attemptTime: currentTime,
      attemptCount: newVal,
      hasViewed: hasViewed,
    };
    await db.ExerciseLab15.create(updatedExercise).id;
    return updatedExercise;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getExercise,
  postExercise,
};
