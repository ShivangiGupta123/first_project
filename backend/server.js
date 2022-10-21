const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const apiurl = require('./route/route')
const cors = require('cors')
const app = express()
const url = 'mongodb://localhost:27017/E-COMMERCE'
const port = process.env.port || 5600

mongoose.connect(url).then((res)=>{
    try{

   
    if(res)
    {
        console.log("database is created successfully")
    }
}
catch(err)
{
    console.log(err)
}
})
app.use(cors())
app.use(bodyparser.urlencoded ({extended:false}))
app.use(bodyparser.json())
app.use('/api/v1',apiurl)

app.listen(port,()=>{
    console.log("server is created successfully",port)
})