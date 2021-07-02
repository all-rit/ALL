module.exports = (sequelize, DataTypes) => {
    const UserLab = sequelize.define(
        'UserLab',
        {
            userlabid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            usersessionid: {
                type: DataTypes.BIGINT
            },
            labid: {
                type: DataTypes.INTEGER
            },
            quizscore: { type: DataTypes.INTEGER, defaultValue: 0},
            aboutcompletedtime: { type: DataTypes.DATE },
            readingcompletedtime: { type: DataTypes.DATE },
            gamecompletedtime: { type: DataTypes.DATE },
            reinforcementcompletedtime: { type: DataTypes.DATE },
            quizcompletedtime: { type: DataTypes.DATE },
            quizresult: {type: DataTypes.TEXT}



        },
        { tableName: 'userlab' }
    );
    UserLab.sync();
    return UserLab;
};
