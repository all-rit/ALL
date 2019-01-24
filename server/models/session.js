let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'Session',
    idAttribute: 'SessionID',
    user: () => {
        return this.belongsTo('User', 'UserID');
    }
});
