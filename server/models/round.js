let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'AudioCue_Round',
    idAttribute: 'RoundID',
    game: () => {
        return this.belongsTo('AudioCue_Game', 'GameID');
    },
    choices: () => {
        return this.hasMany('AudioCue_Choice', 'RoundID');
    }
});
