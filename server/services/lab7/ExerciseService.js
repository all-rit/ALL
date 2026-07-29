const db = require('../../database');

exports.submitChoice = (data) => {
  return db.ExerciseLab7.create({
    userid: data.userid,
    report: data.report,
  }).then((exercise) => {
    return exercise.exerciseid;
  }).catch((err) => {
    console.log(err);
  });
};
