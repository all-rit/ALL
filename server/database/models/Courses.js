module.exports = (sequelize, DataTypes) => {
    const {nanoid} = require("nanoid");
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
            code: {
                type: DataTypes.TEXT,
                unique: {
                    args: true,
                    msg: "Class code is not unique!"
                }
            }
        },
        { tableName: 'courses' }
    );
    // Courses.sync();
    Courses.sync({
        force: false
    }).then(function() {
        Courses.create({
            instructorUserID: 1,
            courseName: 'SWEN 256 Fall 2021',
            createdDate: Date.now(),
            isActive: true,
            code: nanoid(6).toUpperCase()
        })
    })
    return Courses;
};