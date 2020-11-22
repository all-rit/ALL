module.exports = (sequelize, DataTypes) => {
    const UserLab = sequelize.define(
        'userlab',
        {
            userlabid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            usersessionid: {
                type: DataTypes.INTEGER
            },
            labid: {
                type: DataTypes.INTEGER
            },
            quizscore: { type: DataTypes.INTEGER, default: 0},
            aboutcompletedtime: { type: DataTypes.DATE },
            readingcompletedtime: { type: DataTypes.DATE },
            gamecompletedtime: { type: DataTypes.DATE },
            quizcompletedtime: { type: DataTypes.DATE },
            quizresults: {type: DataTypes.TEXT}



        },
        { tableName: 'userlab' }
    );

    return UserLab;
};
