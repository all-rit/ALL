module.exports = (sequelize, DataTypes) => {
  const lab0ProgressCategory = DataTypes.ENUM(
      'DESIGN',
      'BACKEND',
      'FRONTEND',
  );

  // TODO: Add Writing a Lab sections here too
  const lab0ProgressSection = DataTypes.ENUM(
      // Design
      'LabIdeation',
      'LabDecision',
      'WireframeIntro',
      'ScrumIntro',

      // Backend
      'BackendIntroduction',
      'LabData',
      'SchemaDesign',
      'ServiceController',
      'Routing',
      'BackendTipsTricks',

      // Frontend
      'FrontendIntroduction',
      'Boilerplate',
      'Integration',
      'CoreLabPages',
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
