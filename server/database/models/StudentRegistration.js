module.exports = (sequelize, DataTypes) => {
    const StudentRegistration = sequelize.define(
        'StudentRegistration',
        {
            studentRegID: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            email: { type: DataTypes.TEXT },
            courseID: { type: DataTypes.INTEGER },
            requestDate: { type: DataTypes.DATE },
            acceptedDate: { type: DataTypes.DATE },
        },
        { tableName: 'student_registration' }
    );
    StudentRegistration.sync();
    return StudentRegistration;
};