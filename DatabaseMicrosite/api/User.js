const express = require('express');
const router = express.Router();

const User = require('./../models/User');

const bcrypt = require('bcrypt');
const e = require('express');
const { resume } = require('npmlog');


//test
router.get('/test',(req,res) => {
    User.find({}, (err,data)=> {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
   
});


//create
router.post('/send', (req, res)=> {
    let {username, password} = req.body;
    username = username.trim();
    password = password.trim();

    console.log(req.body);
    res.send("posted");
    const newUser = new User({
        username,
        password
    });

    newUser.save().then(result =>{
        res.json({
            status:"SUCCESS",
            message: "hahaha success",
            data : result,
        })
    })
})



//sign in
router.post('/signin', (req, res) => {
    let {username, password} = req.body;
//    username = username.trim();
//    password = password.trim();

    if (username == "" || password == ""){
        res.json({
            status: "FAILED",
            message: "Empty credentials"
        })
    } else{
        User.find({username})
        .then (data => {
            console.log(data);
            if (data.length){
                const hashedPassword = data[0].password;
                bcrypt.compare(password,hashedPassword).then(result => {
                    if (password == hashedPassword){
                        //password match
                        res.json({
                            status: "SUCCESS",
                            message: "Signin successful"
                            
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid username or password.",

                        })
                    
                    }               
                })
                .catch (err => {
                    res.json({
                        status: "FAILED",
                        message: "Error Occured, Please try again."
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials."
                })
            }
        })
        .catch (err => {
            res.json({
                status: "FAILED",
                message: "Error Occured when checking the user."
            })
        })
    } 

})

module.exports=router;