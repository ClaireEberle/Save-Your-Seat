const express = require('express');
const router = express.Router();
const {Customer, Reservation,Owner} = require('../models');

router.get("/",(req,res)=>{
    Reservation.findAll({include:[Customer,Owner]}).then(reservationData=>{
      
     res.json(reservationData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })

 router.get("/:id",(req,res)=>{
   Reservation.findByPk(req.params.id,{include:[Customer,Owner]}).then(reservationData=>{
    res.json(reservationData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})

// THIS ROUTE IS NOT PROTECTED NON LOG IN USER CAN ALSO ACCESS
// WILL PROTECTED THIS ROUTE LATER

 router.post("/",(req,res)=>{
   if(!req.session.userId){
      return res.status(403).json({msg:"login first post"})
   }
    Reservation.create(
    req.body
   ).then(reservationData=>{
    res.json(reservationData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})

// THIS ROUTE IS NOT PROTECTED NON LOG IN USER CAN ALSO ACCESS
// WILL PROTECTED THIS ROUTE LATER

router.delete("/:id",(req,res)=>{
   // if(!req.session.userId){
   //    return res.status(403).json({msg:"login first post"})
   // }
   Reservation.findByPk(req.params.id).then(reservationData =>{
      if(!reservationData){
         return res.status(404).json({msg:"no such reservation"})
      }
      // else if(reservationData.UserId!== req.session.userId){
      //    return res.status(403).json({msg:"not your chirp!"})
      // }
      Reservation.destroy({
         where:{
            id: req.params.id,
         }
      }).then(reservationData =>{
         res.json(chirpData)
       }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:err})
      })
   }).catch(err=>{
      console.log(err);
      res.status(500).json({msg:err})
   })
})

module.exports = router;