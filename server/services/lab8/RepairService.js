/* eslint-disable require-jsdoc */
const db = require('../../database');

async function submitChange(data) {
  if (data.userid) {
    try {
      const data = db.RepairLab6.findOne({
        where: {userid: data.userid},
      });
      if (!data) {

      }
    } catch (error) {

    }
  }
}

async function updateSentiment() {

}


module.exports = {
  submitChange,
  updateSentiment,
};
