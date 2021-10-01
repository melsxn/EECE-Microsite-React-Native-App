const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});

const DataSchema = new Schema({
    Title: String
})

// const UserSchema = new Schema({
//     username : {type: String, required: true},
//     password : {type: String, required: true}
// });

const User = mongoose.model('User', UserSchema);

module.exports =User;