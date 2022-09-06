const db = require('../../database');

exports.submitChange = (data) => {
  return db.RepairLab3.create({
    usersessionid: data.usersessionid,
    cowAltValue: data.cowAltValue,
    carAltValue: data.carAltValue,
    burgerAltValue: data.burgerAltValue,
    catAltValue: data.catAltValue,
  })
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
};
