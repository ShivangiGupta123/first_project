const express = require('express')
const router = express.Router()
const bcrypt1 = require('bcrypt')
const userlog = require('../schema/Userlog')
const validate1 = require('../middleware/validation')
const product = require('../schema/product')


//get api for product
router.get('/getsignupdata',(req,res)=>{
    userlog.find({},(err,result)=>{
        if(err){
            res.send(err);
        };
        res.send(result)
    })
})

// register api

router.post('/postsignupdata', async(req,res)=>{
    
    try{
        // console.log('req.body',req.body)
        const valid = await validate1.validateAsync(req.body)
        // console.log('validation=',validation1)
        
        if(valid)
        {
        let value = new userlog(req.body)

        let gensalt = await bcrypt1.genSalt(10)
        value.Password = await bcrypt1.hash(value.Password , gensalt)
        let newvalue = await value.save()
        res.status(201).json({
            success : true,
            data : {newvalue}
        })
     }
    }

    catch(err)
    {
        res.send(err)
    }
})
// login api
router.post('/login', async(req,res)=>{
    let user = await userlog.findOne({Email:req.body.Email})
    if(user)
    {
        let correctpass = await bcrypt1.compare(req.body.Password,user.Password)
        if(correctpass)
        {
            res.status(200).json({message:"Login successfully"})
        }
        else{
            res.status(400).json({message:"user password is incorrect"})
        }
    }
    else{
        res.status(500).json({message:"user is not found"})
    }
})

//product api

router.post('/postproductdata', async(req,res)=>{
    try{
        let pdts = new product(req.body)
        let newPdt  = await pdts.save()
        res.status(201).json({
            data :{newPdt}
        })
        
        
    }
    catch(err){
        res.send(err)
    }
})

//get api for product
router.get('/getproductdata',(req,res)=>{
    product.find({},(err,result)=>{
        if(err){
            res.send(err);
        };
        res.send(result)
    })
})






module.exports = router
