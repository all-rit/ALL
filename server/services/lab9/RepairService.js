/* eslint-disable no-unused-vars */
const db = require('../../database');

const DATE_REPAIR = 'address-repair';
const ADDRESS_REPAIR = 'Date-Repair';
const NAV_BAR_REPAIR = 'nav-Bar-Repair';


/**
 * serviceSelector(): to return the correct db function to access the
 * right database table.
 * @param {String} service constant string to be passed in
 * @return { Object } to db model
 */
function modelSelector(service) {
  switch (service) {
    case DATE_REPAIR:
      return db.DateRepairLab9;
    case ADDRESS_REPAIR:
      return db.AddressRepairLab9;
    case NAV_BAR_REPAIR:
      return db.NavRepairLab9;
  }
}
/**
 * getRepair(): is a service based function that allows for the
 * operability to retrieve a user's date based on their user id
 * and their closest ime from when the request is sent to track
 * when input is logged.
 * @param {Object} data Object storing payload of the request to retrieve
 * @param {string} modelSelectorStr pass in model constant string.
 * information based on the request.
 */
async function getRepair(data, modelSelectorStr) {
  const {userId} = data;
  const dbModel = modelSelector(modelSelectorStr);
  const payload = {
    userid: userId,
    isComplete: false,
    order: [
      [dbModel.fn('max',
          dbModel.col('repairCount')),
      'DESC'],
    ],
  };
  try {
    return await dbModel.findOne({
      where: payload,
      raw: raw,
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * submitRepair(): is a function that is responsible for
 * recording a users repair changes.
 * @param {Object} data Object containing body of the request
 * @param {String} modelSelectorStr allows for the dynamic
 * assignment for the correct service
 * @return {Number} repair id to show it is created
 */
async function submitRepair(data, modelSelectorStr) {
  const {userId, repair, isComplete, repairCount} = data;
  try {
    const currentTime = new Date().toISOString();
    const dbModel = modelSelector(modelSelectorStr);
    const outputData = await getRepair(data, modelSelectorStr);
    if (!outputData) {
      const newRepair = {
        userid: userId,
        repair: repair,
        isComplete: isComplete,
        attemptTime: currentTime,
        repairCount: 1,
      };
      return await dbModel.create(newRepair).id;
    }
    const postRepair = {
      userid: userId,
      repair: repair,
      isComplete: isComplete,
      attemptTime: currentTime,
      repairCount: repairCount++,
    };
    return await dbModel.create(postRepair).id;
  } catch (error) {
    console.error(error);
  }
}
