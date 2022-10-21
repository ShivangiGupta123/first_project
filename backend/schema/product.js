const mongoose = require('mongoose')
const product1 = new mongoose.Schema({
    Brand: {
        type : String,
        required : true

    },
    Category :{
        type : String,
        required : true

       
    },
    Image :{
        type : String,
        required :true

    },
   
    Price :{
        type : Number,
        required : true
    },
    Size : {
        type : String,
        required :true

    }
})
const product2 = mongoose.model('Product',product1)
module.exports = product2