let db = require('./database');

module.exports = db.Model.extend({
    tableName: 'AudioCue_SourceCode',
    idAttribute: 'SourceCodeID'
});
