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
            aboutcompletedtime: { type: DataTypes.DATE },
            readingcompletedtime: { type: DataTypes.DATE },
            exercisecompletedtime: { type: DataTypes.DATE },
            reinforcementcompletedtime: { type: DataTypes.DATE },
            quizcompletedtime: { type: DataTypes.DATE },
            quizscore: { type: DataTypes.INTEGER},
            labcompletiontime: { type: DataTypes.DATE }
        },
        { tableName: 'userlabcompletion' }
    );
    UserLabCompletion.sync();
    return UserLabCompletion;
};
