const db = require('../../database');
/**
 * getRepair(): is a service based function that allows for the
 * operability to retrieve a user's date based on their user id
 * and their closest ime from when the request is sent to track
 * when input is logged.
 * @param {Object} data Object storing payload of the request to retrieve
 * information based on the request.
* @param {String} section string section indicator to indicate the
 * repair section
 */
async function getRepair(data, section) {
  try {
    return await db.RepairLab12.findOne({
      order: [['repairId', 'DESC']],
      where: {
        userid: data,
        section: section,
      },
      raw: true,
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * submitRepair(): is a function that is responsible for
 * recording a users repair changes.
 * @param {Object} data Object containing body of the request
 * assignment for the correct service
 * @return {Number} repair id to show it is created
 */
async function submitRepair(data) {
  const {userID, repair, isComplete, section} = data;
  try {
    const currentTime = new Date().toISOString();
    const outputData = await getRepair(userID, section);
    if ((!outputData) || outputData.isComplete === true) {
      const newRepair = {
        userid: userID,
        repair: repair,
        isComplete: isComplete,
        section: section,
        attemptTime: currentTime,
        repairCount: 1,
      };
      return await db.RepairLab12.create(newRepair).id;
    }
    const convert = parseInt(outputData.repairCount);
    const newCount = convert + 1;
    const postRepair = {
      userid: userID,
      repair: repair,
      isComplete: isComplete,
      section: section,
      attemptTime: currentTime,
      repairCount: newCount,
    };
    return await db.RepairLab12.create(postRepair).id;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  submitRepair,
  getRepair,
};
