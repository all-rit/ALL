let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'AudioCue_Choice',
    idAttribute: 'ChoiceID',
    round: () => {
        return this.belongsTo('AudioCue_Round', 'RoundID');
    }
});
