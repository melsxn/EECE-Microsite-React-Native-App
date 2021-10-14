const express = require('express');
const router = express.Router();


const AnnoucementData = require('../models/AnnoucementData');


router.get('/test2',(req,res) => {
    AnnoucementData.find({}, (err,data)=> {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
   
});


router.post('/addannouncement', (req, res)=> {
    let { Title, Date, Description} = req.body;

    try {
        
    if (Title == "" || Date == "" || Description == ""){
        return res.json({
            status: "FAILED",
            message: "Empty input fields, Please check again."
        })
    } else {
        console.log(req.body);
        
        const newAnnouncement = new AnnoucementData({
            Title,
            Date,
            Description
        });
        newAnnouncement.save().then(result => {
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

router.post('/editannouncement', (req, res)=> {
    let {Title, Date, Description} = req.body;
    console.log(req.body);

    AnnoucementData.findOneAndUpdate({'Title' : Title}, {$set : {'Date' : Date, 'Description' : Description}},  function (err, docs) {
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





router.post('/deleteannouncement', (req, res)=> {
    let {Title} = req.body;
    console.log(req.body);

    AnnoucementData.findOneAndDelete({'Title' : Title},  function (err, docs) {
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
                message: "Delete Success",
                data : docs,
            })  
        }
    })
})


module.exports=router;