let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'Login',
    idAttribute: 'LoginID',
    user: () => {
        return this.belongsTo('User', 'UserID');
    },
    session: () => {
        return this.belongsTo('Session', 'SessionID');
    }
});
