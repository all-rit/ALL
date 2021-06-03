module.exports = (sequelize, DataTypes) => {
    const Lab = sequelize.define(
        'Lab',
        {
            labID: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            labName: { type: DataTypes.TEXT },
            category: { type: DataTypes.TEXT },
            learningObjectives: { type: DataTypes.TEXT },
            instructorOnlyInfo: { type: DataTypes.TEXT },
            smallImageURL: { type: DataTypes.TEXT },
            mediumImageURL: { type: DataTypes.TEXT },
            largeImageURL: { type: DataTypes.TEXT },
            thumbnailImageURL: { type: DataTypes.TEXT },
            shortDescription: { type: DataTypes.TEXT },
            fullDescription: { type: DataTypes.TEXT },
            labURL: { type: DataTypes.TEXT },
            labAuthors: { type: DataTypes.ARRAY(DataTypes.TEXT) }
        },
        { tableName: 'lab' }
    );
    Lab.sync();
    // Lab.sync({
    //     force: true
    // }).then(function() {
    //     Lab.create({
    //
    //     })
    // })
    return Lab;
};