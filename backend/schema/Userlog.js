const mongoose = require('mongoose')
const userlog1 = new mongoose.Schema({
    Name : {
        type : String,

    },
    Email :{
        type : String,

       unique : true
    },
    Password :{
        type : String,

    },
   
    Phone :{
        type : Number,
        required : true
    },
    Role : {
        type : String,
        required :true

    }
})
const userlog2 = mongoose.model('Userlog',userlog1)
module.exports = userlog2