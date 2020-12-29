const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Feed',feedSchema)