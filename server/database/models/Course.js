module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        'Course',
        {
            courseID: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            instructorUserID: { type: DataTypes.INTEGER },
            courseName: { type: DataTypes.TEXT },
            createdDate: { type: DataTypes.DATE },
            assignedLabs: {type: DataTypes.ARRAY(DataTypes.INTEGER) },
            isActive: { type: DataTypes.BOOLEAN }
        },
        { tableName: 'course' }
    );
    Course.sync();
    return Course;
};