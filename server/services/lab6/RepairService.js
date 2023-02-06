const db = require('../../database');

exports.submitChange = (data) => {
  const usersessionid = data.usersessionid;
  const appearance = data.appearance;
  const yearsexperience = data.yearsexperience;
  const availability = data.availability;
  const expectedpay = data.expectedpay;
  if (usersessionid) {
    return db.RepairLab6
        .findOne({
          where: {usersessionid: usersessionid},
        },
        ).then((repair)=> {
          if (repair !== null) {
            repair.appearance = appearance;
            repair.yearsexperience = yearsexperience;
            repair.availability = availability;
            repair.expectedpay = expectedpay;
            repair.save();
          } else {
            db.RepairLab6.create({
              usersessionid: usersessionid,
              appearance: appearance,
              yearsexperience: yearsexperience,
              availability: availability,
              expectedpay: expectedpay,
            }).then((repair) => {
              return repair.repairid;
            });
          }
        }).catch((err) => {
          console.log(err);
        });
  }
  return Promise.resolve();
};

exports.getUserChange = (userID) => {
  return db.RepairLab6
      .findOne({
        where: {
          userid: userID,
        },
        raw: true,
      }).then((user)=>{
        return user;
      });
};
