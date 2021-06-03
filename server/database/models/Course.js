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
    // Course.sync({
    //     force: true
    // }).then(function() {
    //     Course.create({
    //         instructorUserID: 1,
    //         courseName: 'SWEN 256 Fall 2021',
    //         createDate: Date.now(),
    //         assignedLabs: [1],
    //         isActive: true
    //     })
    // })
    return Course;
};