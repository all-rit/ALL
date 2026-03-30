module.exports = (sequelize, DataTypes) => {
  const Imagine26 = sequelize.define(
    "Imagine26",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.TEXT,
      },
      section: {
        type: DataTypes.ENUM,
        values: ["experiential", "expression", "control"],
      },
      preSurvey: {
        type: DataTypes.JSON,
      },
      postSurvey: {
        type: DataTypes.JSON,
      },
      deepfakeImagePath: {
        type: DataTypes.TEXT,
      },
    },
    { tableName: "imagine26" },
  );

  Imagine26.sync();
  return Imagine26;
};
