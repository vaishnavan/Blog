const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    postedBy:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
})


module.exports = mongoose.model('Blog',blogSchema)