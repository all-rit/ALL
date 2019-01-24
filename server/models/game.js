let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'AudioCue_Game',
    idAttribute: 'GameID',
    login: () => {
        return this.belongsTo('Login', 'LoginID');
    },
    rounds: () => {
        return this.hasMany('AudioCue_Round', 'GameID');
    }
});
