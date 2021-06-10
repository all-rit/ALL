module.exports = (sequelize, DataTypes) => {
    const CourseLabs = sequelize.define(
        'CourseLabs',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            courseID: DataTypes.INTEGER,
            labID: DataTypes.INTEGER
        },
        { tableName: 'course_labs' }
    );
    // CourseLabs.sync();
    CourseLabs.sync({
        force: true
    }).then(function() {
        CourseLabs.create({
            courseID: 1,
            labID: 1
        })
    })
    return CourseLabs;
};