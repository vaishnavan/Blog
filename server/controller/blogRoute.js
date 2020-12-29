const express = require('express')
const router=express.Router();
const Blog = require('../model/blog')

//create post
router.post('/',(req,res)=>{
    const blog = new Blog({
        title:req.body.title,
        content:req.body.content,
        postedBy:req.body.postedBy,
        url:req.body.url,
        createdAt:req.body.createdAt
    })
    blog.save()
    .then(data=>{
        res.status(200).json({success:"registered successfully"})
    })
})

//display post
router.get('/allpost',(req,res)=>{
    Blog.find()
    .then(data=>{
        res.json(data)
    })
})


//delete post
router.delete('/del/:id',(req,res)=>{
    Blog.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.json({message:"deleted successfully"})
    })
})




module.exports=router