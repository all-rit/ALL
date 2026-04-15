const db = require('../../database');

exports.submitChange = (data) => {
  return db.RepairLab7.create({
    usersessionid: data.usersessionid,
    activity: data.activity,
    repair: data.repair,
  })
      .then((result) => {
        return result.dataValues.repairid;
      })
      .catch((err) => {
        console.log(err);
      });
};

exports.updateReport = (data) => {
  if (data.repairId) {
    return db.RepairLab7.findByPk(data.repairId).then((exercise) => {
      exercise.update({report: data.report});
    });
  }
};
