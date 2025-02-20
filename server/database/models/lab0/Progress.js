/* eslint-disable new-cap */
module.exports = (sequelize, DataTypes) => {
  const lab0ProgressCategory = DataTypes.ENUM(
      'DESIGNING',
      'BACKEND',
      'FRONTEND',
  );

  // TODO: Add Writing a Lab sections here too
  const lab0ProgressSection = DataTypes.ENUM(
      'LabDataRepair',
      'SchemaRepair',
      'ServiceControllerRepair',
      'RoutingRepair',
      'BackendTipsTricks',
      'BoilerplateRepair',
      'IntegrationRepair',
      'CoreLabPagesRepair',
      'ComponentLibrary',
      'FrontendTipsTricks',
  );

  const lab0ProgressSectionStatus = DataTypes.ENUM(
      'IN_PROGRESS',
      'COMPLETED',
  );

  const Progress = sequelize.define('ProgressLab0', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.BIGINT,
    },
    category: {
      type: lab0ProgressCategory,
    },
    section: {
      type: lab0ProgressSection,
    },
    sectionStatus: {
      type: lab0ProgressSectionStatus,
    },
  }, {
    tableName: 'lab0_progress',
  });

  Progress.sync();
  return Progress;
};
