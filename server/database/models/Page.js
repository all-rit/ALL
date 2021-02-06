module.exports = (sequelize, DataTypes) => {
    const Page = sequelize.define(
        'page',
        {
            pageid: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            usersessionid: {
                type: DataTypes.BIGINT
            },
            pagename: { type: DataTypes.TEXT },
            completiontime: { type: DataTypes.INTEGER },
            labid: {type: DataTypes.INTEGER}
        },
        { tableName: 'page' }
    );
    Page.sync();
    return Page;
};
