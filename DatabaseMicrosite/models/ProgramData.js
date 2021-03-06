const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    ProgramType: String,
    TitleProgram: String,
    Date : String,
    Description : String
});

const ProgramData = mongoose.model('ProgramData', ProgramSchema, 'programdata');

module.exports = ProgramData;