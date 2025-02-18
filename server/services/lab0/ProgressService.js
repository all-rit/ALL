const db = require('../../database');

/**
 * TBD
 * @param {number} userID TBD
 * @return {Object} TBD
 */
async function getProgress(userID) {
  try {
    return await db.ProgressLab0.findAll({
      attributes: [
        'category',
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
      group: 'category',
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * TBD
 * @param {number} userID TBD
 * @param {string} category TBD
 * @param {string} section TBD
 * @param {string} sectionStatus TBD
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
      if (result[1]) return;
      result[0].sectionStatus = sectionStatus;
      result[0].save();
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProgress,
  submitProgress,
};
