const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}) .then (() => { 
    console.log("database connectedasd");
})
.catch((err) => console.log(err));

