const express = require('express');
const router = express.Router();


const AnnoucementData = require('../models/AnnoucementData');


router.post('/getannouncement',(req,res) => {
    AnnoucementData.find({}, (err,docs)=> {
        if(!err) {
            res.json({
                status: "FAILED",
                message: "Empty input fields, Please check again.",
                data : docs
            })  
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
                message: "Announcement Successfully added!!",
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
                message: "Announcement Successfully Updated!!",
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
                message: "Announcement Successfully Deleted!!",
                data : docs,
            })  
        }
    })
})


module.exports=router;