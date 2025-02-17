/* eslint-disable new-cap */
module.exports = (sequelize, DataTypes) => {
  const lab0RepairCategory = DataTypes.ENUM(
      'DESIGNING',
      'BACKEND',
      'FRONTEND',
  );

  // TODO: Add Writing a Lab sections here too
  const lab0RepairSection = DataTypes.ENUM(
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

  const lab0RepairSectionStatus = DataTypes.ENUM(
      'IN_PROGRESS',
      'COMPLETED',
  );

  const Repair = sequelize.define('RepairLab0', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoincrement: true,
    },
    userid: {
      type: DataTypes.BIGINT,
    },
    category: {
      type: lab0RepairCategory,
    },
    section: {
      type: lab0RepairSection,
    },
    sectionStatus: {
      type: lab0RepairSectionStatus,
    },
  }, {
    tableName: 'lab0_repair',
  });

  Repair.sync();
  return Repair;
};
