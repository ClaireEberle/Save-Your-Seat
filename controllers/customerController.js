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

 router.get("/:id",(req,res)=>{
   Customer.findByPk(req.params.id,{
   //{include:[{model:Reservation, as: 'reservation'}]}
   }).then(userData=>{
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(404).json({msg:err})
   })
})

 router.post("/",(req,res)=>{
   Customer.create(req.body).then(userData=>{
    req.session.userId = userData.id;
    req.session.userEmail = userData.email;
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})

router.post("/login",(req,res)=>{
   Customer.findOne({
      where:{
         email: req.body.email
      }
   }).then(userData =>{
      if(!userData){
         return res.status(401).json({msg:"incorrect email or password"})
      } else {
         if(bcrypt.compareSync(req.body.password,userData.password)){
         req.session.userId = userData.id;
         req.session.userEmail = userData.email;
         return res.json(userData)
         } else {
            return res.status(401).json({msg:"incorrect email or password"})
         }
      }
   }).catch(err=>{
      console.log(err);
      res.status(500).json({msg:err})
     })
})
module.exports = router;