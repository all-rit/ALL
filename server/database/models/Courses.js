module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define(
        'Courses',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            instructorUserID: { type: DataTypes.INTEGER },
            courseName: { type: DataTypes.TEXT },
            createdDate: { type: DataTypes.DATE },
            isActive: { type: DataTypes.BOOLEAN },
            code: { type: DataTypes.TEXT }
        },
        { tableName: 'courses' }
    );
    Courses.sync();
    // Courses.sync({
    //     force: true
    // }).then(function() {
    //     Courses.create({
    //         instructorUserID: 1,
    //         courseName: 'SWEN 256 Fall 2021',
    //         createdDate: Date.now(),
    //         isActive: true,
    //         code: "123456"
    //     })
    // })
    return Courses;
};