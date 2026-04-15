const db = require('../../database');

exports.submitChange = (data) => {
  return db.RepairLab2.create({
    usersessionid: data.usersessionid,
    background: data.background,
    correctColor: data.correctColor,
    incorrectColorOne: data.incorrectColorOne,
    incorrectColorTwo: data.incorrectColorTwo,
  })
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
};
