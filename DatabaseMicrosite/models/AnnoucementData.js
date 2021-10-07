const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema({
    DataType: String,
    Title: String,
    Date : String,
    Description : String
});


const AnnoucementData = mongoose.model('AnnoucementData', DataSchema, 'announcementdata');

module.exports = AnnoucementData;