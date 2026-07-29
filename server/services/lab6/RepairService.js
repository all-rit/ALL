const db = require('../../database');

exports.submitChange = (data) => {
  const userid = data.userid;
  const appearance = data.appearance;
  const yearsexperience = data.yearsexperience;
  const availability = data.availability;
  const expectedpay = data.expectedpay;
  if (userid) {
    return db.RepairLab6
        .findOne({
          where: {userid: userid},
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
              userid: userid,
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

exports.getUserChange = (userid) => {
  return db.RepairLab6
      .findOne({
        where: {
          userid: userid,
        },
        raw: true,
      }).then((user)=>{
        return user;
      });
};
