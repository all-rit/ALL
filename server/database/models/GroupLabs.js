module.exports = (sequelize, DataTypes) => {
    const GroupLabs = sequelize.define(
        'GroupLabs',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            groupID: DataTypes.INTEGER,
            labID: DataTypes.INTEGER
        },
        { tableName: 'group_labs' }
    );
    GroupLabs.sync();
    // GroupLabs.sync({
    //     force: true
    // }).then(function() {
    //     GroupLabs.create({
    //         groupID: 1,
    //         labID: 1
    //     })
    // })
    return GroupLabs;
};