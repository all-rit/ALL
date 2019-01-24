let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'User',
    idAttribute: 'UserID',
    sessions: () => {
        return this.hasMany('Session', 'UserID');
    }
});
