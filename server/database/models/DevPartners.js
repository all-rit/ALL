module.exports = (sequelize, DataTypes) => {
  const DevPartners = sequelize.define(
      'DevPartners',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        partnerName: {type: DataTypes.TEXT},
        imageURL: {type: DataTypes.TEXT},
        websiteURL: {type: DataTypes.TEXT},
      },
      {tableName: 'dev_partners'},
  );

  DevPartners.sync();
  return DevPartners;
};
