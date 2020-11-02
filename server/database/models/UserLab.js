module.exports = (sequelize, DataTypes) => {
    const UserLab = sequelize.define(
        'userlab',
        {
            labid: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            userid: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            quizscore: { type: DataTypes.INTEGER },
            completed: { type: DataTypes.BOOLEAN }
        },
        { tableName: 'userlab' }
    );

    return UserLab;
};
