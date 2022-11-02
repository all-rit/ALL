/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
const db = require('../../database');

exports.submitChangeButton = (data) => {
  const usersessionid = data.usersessionid;
  const height = data.height;
  const width = data.width;
  if (usersessionid) {
    return db.RepairLab4
        .findOne({
          where:
						{
						  usersessionid: usersessionid,
						},
        },
        ).then((repair)=> {
          if (repair !== null) {
            repair.height = height;
            repair.width = width;
            repair.save();
          } else {
            db.RepairLab4.create({
              usersessionid: usersessionid,
              height: height,
              width: width,
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

exports.submitChangeSkip = (data) => {
  const usersessionid = data.usersessionid;
  const skiptomain = data.skiptomain;
  if (usersessionid) {
    return db.RepairLab4
        .findOne({
          where: {
            usersessionid: usersessionid,
          },
        }).then((repair) => {
          if (repair !== null) {
            repair.skiptomain = skiptomain;
            repair.save();
          } else {
            db.RepairLab4.create({
              usersessionid: usersessionid,
              skiptomain: skiptomain,
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

exports.submitChangeHint = (data) => {
  const usersessionid = data.usersessionid;
  const tabindex = data.tabindex;
  if (usersessionid) {
    return db.RepairLab4
        .findOne({
          where: {
            usersessionid: usersessionid,
          },
        }).then((repair) => {
          if (repair !== null) {
            repair.tabindex = tabindex;
            repair.save();
          } else {
            db.RepairLab4.create({
              usersessionid: usersessionid,
              tabindex: tabindex,
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
