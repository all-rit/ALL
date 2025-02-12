/* eslint-disable new-cap */
module.exports = (sequelize, DataTypes) => {
  // TODO: Add Writing a Lab sections here too
  const lab0RepairSection = DataTypes.ENUM(
      'LabDataRepair',
      'SchemaRepair',
      'ServiceControllerRepair',
      'RoutingRepair',
      'BackendTipsTricks',
      'BoilerplateRepair',
      'CoreLabPagesRepair',
      'ComponentLibraryRepair',
      'FrontendTipsTricks',
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
    section: {
      type: lab0RepairSection,
    },
    sectionStatus: {
      type: DataTypes.ENUM('IN_PROGRESS', 'COMPLETED'),
    },
  }, {
    tableName: 'lab0_repair',
  });

  Repair.sync();
  return Repair;
};
