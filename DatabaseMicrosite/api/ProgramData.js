const express = require('express');
const ProgramData = require('../models/ProgramData');
const router = express.Router();




router.post('/getbachelor',(req,res) => {
    const TitleProgram = "Bachelor's Degrees"

    ProgramData.find({'ProgramType' : TitleProgram}, (err,docs)=> {
        if(docs =="") {
            res.json({
                status: "FAILED",
                message: "Document not found",
                data : docs
            })  
        } else {
            res.json({
                status: "SUCCESS",
                message: "Document found",
                data : docs
            })  
        }
    })
   
});

router.post('/getmaster',(req,res) => {
    const TitleProgram = "Master's Degrees"

    ProgramData.find({'ProgramType' : TitleProgram}, (err,docs)=> {
        if(docs =="") {
            res.json({
                status: "FAILED",
                message: "Document not found",
                data : docs
            })  
        } else {
            res.json({
                status: "SUCCESS",
                message: "Document found",
                data : docs
            })  
        }
    })
   
});

router.post('/getPhD',(req,res) => {
    const TitleProgram = "PhD Programs"

    ProgramData.find({'ProgramType' : TitleProgram}, (err,docs)=> {
        if(docs =="") {
            res.json({
                status: "FAILED",
                message: "Document not found",
                data : docs
            })  
        } else {
            res.json({
                status: "SUCCESS",
                message: "Document found",
                data : docs
            })  
        }
    })
   
});

router.post('/addprogram', (req, res)=> {
    let { ProgramType, TitleProgram, Date, Description} = req.body;

    try {
        
    if (ProgramType == "" || TitleProgram == "" || Date == "" || Description == ""){
        return res.json({
            status: "FAILED",
            message: "Empty input fields, Please check again."
        })
    } else {
        console.log(req.body);
        
        const newProgram = new ProgramData({
            ProgramType,
            TitleProgram,
            Date,
            Description
        });
        newProgram.save().then(result => {
            res.json({
                status:"SUCCESS",
                message: "Program Successfully Added!",
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
    let {ProgramType, TitleProgram, Date, Description} = req.body;
    console.log(req.body);

    ProgramData.findOneAndUpdate({'ProgramType' : ProgramType, 'TitleProgram' : TitleProgram}, {$set : {'Date' : Date,'Description' : Description}},  function (err, docs) {
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
                message: "Program Successfully Updated!",
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
                message: "Program Successfully Deleted!",
                data : docs,
            })  
        }
    })
})

module.exports=router;