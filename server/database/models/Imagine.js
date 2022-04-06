module.exports = (sequelize, DataTypes) => {
    const Imagine = sequelize.define(
        'Imagine', {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            userid: {
                type: DataTypes.INTEGER
            },
            avatar: { type: DataTypes.JSON },
            squad: { type: DataTypes.JSON },
            lobbyMessages: { type: DataTypes.JSON },
        }, { tableName: 'imagine' }
    );
    
    Imagine.sync();
    return Imagine;
};