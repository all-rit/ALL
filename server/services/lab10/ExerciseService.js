const db = require('../../database');

exports.updateWeights = (data) => {
  return db.ExerciseLab10.create({
    userid: data.userid,
    weights: data.weights,
    session: data.session,
  }).then((exercise) => {
    return exercise.exerciseid;
  }).catch((err) => {
    console.log(err);
  });
};

exports.retrieveWeights = (userid) => {
  return db.ExerciseLab10.findOne({
    where: {
      userid,
    },
    order: [['exerciseid', 'DESC']],
  }).then((user) => {
    return user;
  });
};
