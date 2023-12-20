/* eslint-disable new-cap */
const REPAIR_WORD_COUNT = 'WordCount';
const REPAIR_SENTENCE_COUNT = 'SentenceCount';
const REPAIR_COMPLEX_WORDS = 'ComplexWordCount';
module.exports = (sequelize, DataTypes) => {
  const DateRepair = sequelize.define('RepairLab11',
      {
        repairId: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.BIGINT,
        },
        section: {
          type: DataTypes.ENUM(REPAIR_WORD_COUNT,
              REPAIR_SENTENCE_COUNT,
              REPAIR_COMPLEX_WORDS),
        },
        repair: {
          type: DataTypes.JSON,
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
        repairCount: {
          type: DataTypes.BIGINT,
        },
      },
      {
        tableName: 'lab11_repair',
      },
  );

  DateRepair.sync();
  return DateRepair;
};

