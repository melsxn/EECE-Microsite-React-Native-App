
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;


const UserRouter = require('./api/User');
const AnnouncementRouter = require('./api/AnnouncementData');

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);
app.use('/announcementdata', AnnouncementRouter);

app.listen(port, () => {
    console.log('The server is connected on port ' + port);
})