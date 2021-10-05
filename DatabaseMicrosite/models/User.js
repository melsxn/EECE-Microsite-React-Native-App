const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});

const DataSchema = new Schema({
    DataType: String,
    Title: String,
    Date : String,
    Description : String
});



const User = mongoose.model('User', UserSchema, 'users');
const AnnoucementData = mongoose.model('AnnoucementData', DataSchema, 'users');


module.exports = User;
