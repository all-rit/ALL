module.exports = (sequelize, DataTypes) => {
    const LabAuthors = sequelize.define(
        'LabAuthors',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            labID: { type: DataTypes.INTEGER },
            memberID: { type: DataTypes.INTEGER }
        },
        { tableName: 'lab_authors' }
    );
    LabAuthors.sync();
    return LabAuthors;
};