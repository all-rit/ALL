module.exports = (sequelize, DataTypes) => {
    const Enrollment = sequelize.define(
        'Enrollment',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            userID: { type: DataTypes.INTEGER },
            groupID: { type: DataTypes.INTEGER },
            enrolledDate: { type: DataTypes.DATE },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        { tableName: 'enrollment' }
    );
    Enrollment.sync();
    // Enrollment.sync({
    //     force: false
    // }).then(function() {
        // Enrollment.create({
        //     userID: 4,
        //     groupID: 3,
        //     enrolledDate: Date.now()
        // });
    //     Enrollment.create({
    //         userID: 1,
    //         groupID: 1,
    //         enrolledDate: Date.now()
    //     });
    //     Enrollment.create({
    //         userID: 2,
    //         groupID: 1,
    //         enrolledDate: Date.now()
    //     });
    //     Enrollment.create({
    //         userID: 13,
    //         groupID: 3,
    //         enrolledDate: Date.now()
    //     });
    //     Enrollment.create({
    //         userID: 14,
    //         groupID: 2,
    //         enrolledDate: Date.now()
    //     });
    // })
    return Enrollment;
};