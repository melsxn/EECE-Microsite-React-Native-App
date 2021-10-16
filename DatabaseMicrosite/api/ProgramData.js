const express = require('express');
const ProgramData = require('../models/ProgramData');
const router = express.Router();



router.post('/addprogram', (req, res)=> {
    let { TitleProgram, Date, Description} = req.body;

    try {
        
    if (TitleProgram == "" || Date == "" || Description == ""){
        return res.json({
            status: "FAILED",
            message: "Empty input fields, Please check again."
        })
    } else {
        console.log(req.body);
        
        const newProgram = new ProgramData({
            TitleProgram,
            Date,
            Description
        });
        newProgram.save().then(result => {
            res.json({
                status:"SUCCESS",
                message: "hahaha success",
                data : result,
            })
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred."
            })
        })
    }

    } catch (error) {
        console.log(error);
    }
    

})

router.post('/editprogram', (req, res)=> {
    let {TitleProgram, Date, Description} = req.body;
    console.log(req.body);

    ProgramData.findOneAndUpdate({'TitleProgram' : TitleProgram}, {$set : {'Date' : Date,'Description' : Description}},  function (err, docs) {
        if (err){
            console.log(err)
        }
        else if(docs == null){
            res.json({
                status:"FAILED",
                message: "The Title is not found in the database. Please try again.",
            })    
        }
        else{
            res.json({
                status:"SUCCESS",
                message: "hahaha success",
                data : docs,
            })  
        }
    })
})





router.post('/deleteprogram', (req, res)=> {
    let {TitleProgram} = req.body;
    console.log(req.body);

    ProgramData.findOneAndDelete({'TitleProgram' : TitleProgram},  function (err, docs) {
        if (err){
            console.log(err)
        }
        else if(docs == null){
            res.json({
                status:"FAILED",
                message: "The Title is not found in the database. Please try again.",
            })    
        }
        else{
            res.json({
                status:"SUCCESS",
                message: "hahaha success",
                data : docs,
            })  
        }
    })
})

module.exports=router;