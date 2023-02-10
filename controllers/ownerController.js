const express = require('express');
const router = express.Router();
const {Owner, Reservation} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    Owner.findAll().then(ownerData=>{
      //{include:[{model:Reservation, as: 'reservation'}]}
     res.json(ownerData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })

 router.get("/:id",(req,res)=>{
   Owner.findByPk(req.params.id,{
   //{include:[{model:Reservation, as: 'reservation'}]}
   }).then(ownerData=>{
    res.json(ownerData)
   }).catch(err=>{
    console.log(err);
    res.status(404).json({msg:err})
   })
})

 router.post("/",(req,res)=>{
   Owner.create(
    req.body
   ).then(ownerData=>{

    req.session.ownerEmail = req.body.email;
    res.json(ownerData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})

router.post("/login",(req,res)=>{
   Owner.findOne({
      where:{
         email: req.body.email
      }
   }).then(ownerData =>{
      if(!ownerData){
         return res.status(401).json({msg:"incorrect email or password"})
      } else {
         if(bcrypt.compareSync(req.body.password,ownerData.password)){
         req.session.ownerId = ownerData.id;
         req.session.ownerEmail = ownerData.email;
         return res.json(ownerData)
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