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
    //     force: false
    // }).then(function() {
    //     GroupLabs.create({
    //         groupID: 1,
    //         labID: 1
    //     });
    //     GroupLabs.create({
    //         groupID: 1,
    //         labID: 2
    //     });
    //     GroupLabs.create({
    //         groupID: 2,
    //         labID: 3
    //     });
    //     GroupLabs.create({
    //         groupID: 3,
    //         labID: 4
    //     });
    //     GroupLabs.create({
    //         groupID: 2,
    //         labID: 5
    //     });
    // });

    return GroupLabs;
};