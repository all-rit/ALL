module.exports = (sequelize, DataTypes) => {
  const NavRepair = sequelize.define('NavRepairLab9',
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
        repair: {
          type: DataTypes.JSON,
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
        },
        attemptTime: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'lab9_nav_repair',
      },
  );

  NavRepair.sync();
  return NavRepair;
};

