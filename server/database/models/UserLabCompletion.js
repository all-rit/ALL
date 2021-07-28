module.exports = (sequelize, DataTypes) => {
    const UserLabCompletion = sequelize.define(
        'UserLabCompletion',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            userid: {
                type: DataTypes.INTEGER
            },
            labid: {
                type: DataTypes.INTEGER
            },
            labstarttime: { type: DataTypes.DATE },
            completedabout: { type: DataTypes.BOOLEAN, defaultValue: false},
            completedreading: { type: DataTypes.BOOLEAN, defaultValue: false},
            completedexercise: { type: DataTypes.BOOLEAN, defaultValue: false},
            completedreinforcement: { type: DataTypes.BOOLEAN, defaultValue: false},
            completedquiz: { type: DataTypes.BOOLEAN, defaultValue: false},
            quizscore: { type: DataTypes.INTEGER},
            labcompletiontime: { type: DataTypes.DATE }
        },
        { tableName: 'userlabcompletion' }
    );
    UserLabCompletion.sync();
    return UserLabCompletion;
};
