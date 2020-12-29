const express= require('express')
const router = express.Router();
const Feed = require('../model/feed')


router.post('/feedback',(req,res)=>{
    const data=new Feed({
        comment:req.body.comment
    })
    data.save()
    .then(getdata=>{
        res.json(getdata)
    })
})

router.get('/allfeed',(req,res)=>{
    Feed.find()
    .then(data=>{
        res.json(data)
    })
})



module.exports=router