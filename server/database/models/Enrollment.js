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
    return Enrollment;
};