module.exports = (sequelize, DataTypes) => {
    const {nanoid} = require("nanoid");
    const Groups = sequelize.define(
        'Groups',
        {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            instructorUserID: { type: DataTypes.INTEGER },
            groupName: { type: DataTypes.TEXT },
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
        { tableName: 'groups' }
    );
    Groups.sync();
    // Groups.sync({
    //     force: false
    // }).then(function() {
    //     Groups.create({
    //         instructorUserID: 1,
    //         groupName: 'SWEN 256 Fall 2021',
    //         createdDate: Date.now(),
    //         isActive: true,
    //         code: nanoid(6).toUpperCase()
    //     })
    // })
    return Groups;
};