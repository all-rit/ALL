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
            courseID: { type: DataTypes.INTEGER },
            enrolledDate: { type: DataTypes.DATE },
        },
        { tableName: 'enrollment' }
    );
    Enrollment.sync();
    // Enrollment.sync({
    //     force: true
    // }).then(function() {
    //     Enrollment.create({
    //         userID: 2,
    //         courseID: 1,
    //         enrolledDate: Date.now()
    //     })
    // })
    return Enrollment;
};