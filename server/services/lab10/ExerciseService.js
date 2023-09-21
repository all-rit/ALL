const db = require('../../database');

exports.updateWeights = (data) => {
  return db.ExerciseLab10.create({
    userid: data.userid,
    weights: data.weights,
  }).then((exercise) => {
    return exercise.exerciseid;
  }).catch((err) => {
    console.log(err);
  });
};
