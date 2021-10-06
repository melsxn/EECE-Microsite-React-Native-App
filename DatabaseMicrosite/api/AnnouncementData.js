const express = require('express');
const router = express.Router();


const AnnoucementData = require('../models/User');


router.get('/test2',(req,res) => {
    AnnoucementData.find({}, (err,data)=> {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
   
});

router.post('/send2', (req, res)=> {
    let {DataType, Title, Date, Description} = req.body;


    if (DataType == "" || Title == "" || Date == "" || Description == ""){
        return res.json({
            status: "FAILED",
            message: "Empty input fields, Please check again."
        })
    } else {
        console.log(req.body);
        res.send("posted");
        const newAnnouncement = new AnnoucementData({
            DataType,
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
    

})

router.post('/send3', (req, res)=> {
    let {DataType, Title, Date, Description} = req.body;

    console.log(req.body);
    res.send("posted");
    const newAnnouncement = new AnnoucementData({
        DataType,
        Title,
        Date,
        Description
    });

    newAnnouncement.save().then(result =>{
        res.json({
            status:"SUCCESS",
            message: "hahaha success",
            data : result,
        })
    })
})




module.exports=router;