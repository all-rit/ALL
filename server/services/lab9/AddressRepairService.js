const db = require('../../database');
/**
 * getRepair(): is a service based function that allows for the
 * operability to retrieve a user's date based on their user id
 * and their closest ime from when the request is sent to track
 * when input is logged.
 * @param {Object} data Object storing payload of the request to retrieve
 * information based on the request.
 */
async function getRepair(data) {
  try {
    return await db.AddressRepairLab9.findOne({
      order: [['repairId', 'DESC']],
      where: {userid: data},
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
  const {userId, repair, isComplete} = data;
  try {
    const currentTime = new Date().toISOString();
    const outputData = await getRepair(userId);
    if ((!outputData) || outputData.isComplete === true) {
      const newRepair = {
        userid: userId,
        repair: repair,
        isComplete: isComplete,
        attemptTime: currentTime,
        repairCount: 1,
      };
      return await db.AddressRepairLab9.create(newRepair).id;
    }
    const convert = parseInt(outputData.repairCount);
    const newCount = convert + 1;
    const postRepair = {
      userid: userId,
      repair: repair,
      isComplete: isComplete,
      attemptTime: currentTime,
      repairCount: newCount,
    };
    return await db.AddressRepairLab9.create(postRepair).id;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  submitRepair,
  getRepair,
};
