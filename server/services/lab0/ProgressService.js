const db = require('../../database');

/**
 * Retrieves a user's progress from the database grouped by category.
 * @param {number} userID The user id to filter by
 * @return {Object} Contains information about their completion of the lab.
 */
async function getProgress(userID) {
  try {
    return await db.ProgressLab0.findOne({
      attributes: [
        [
          db.sequelize.fn(
              'json_object_agg',
              db.sequelize.col('section'),
              db.sequelize.col('sectionStatus')),
          'progress',
        ],
      ],
      where: {
        userid: userID,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Submits a progress update for a user's section of the lab.
 * If the section has already been attempted by the user,
 * then the sectionStatus is replaced with this request.
 * @param {number} userID The user id
 * @param {string} category The category of the section
 * @param {string} section The section identifier
 * @param {string} sectionStatus The status of the section,
 * either IN_PROGRESS or COMPLETED
 */
async function submitProgress(userID, category, section, sectionStatus) {
  try {
    await db.ProgressLab0.findOrCreate({
      where: {
        userid: userID,
        category: category,
        section: section,
      },
      defaults: {
        sectionStatus: sectionStatus,
      },
    }).then((result) => {
      if (result[1]) {
        // A new record was just created, no update necessary
        return;
      } else if (result[0].sectionStatus !== 'COMPLETED') {
        // Record found but not created and sectionStatus differs
        result[0].sectionStatus = sectionStatus;
        result[0].save();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProgress,
  submitProgress,
};
