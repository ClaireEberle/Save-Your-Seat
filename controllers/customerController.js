const express = require('express');
const router = express.Router();
const {Customer, Reservation} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    Customer.findAll().then(userData=>{
      //{include:[{model:Reservation, as: 'reservation'}]}
     res.json(userData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })
 router.post("/",(req,res)=>{
    console.log(req.body);
   Customer.create({
    email:req.body.email,
    password:req.body.password
   }).then(userData=>{
    req.session.userId = userData.id;
    req.session.userEmail = userData.email;
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})
module.exports = router;