const db = require('../../database');

async function getRepair(userid, section) {
  try {
    return await db.RepairLab15.findOne({
      order: [['repairId', 'DESC']],
      where: {
        userid: userid,
        section: section,
      },
      raw: true,
    });
  } catch (error) {
    console.error(error);
  }
}

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
      return (await db.RepairLab15.create(newRepair)).id;
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
    return (await db.RepairLab15.create(postRepair)).id;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  submitRepair,
  getRepair,
};
