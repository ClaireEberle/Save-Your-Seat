const express = require('express');
const router = express.Router();
const {Customer, Reservation,Owner} = require('../models');

router.get("/",(req,res)=>{
    Reservation.findAll({include:[{model:Customer, as: 'customer'}]}).then(reservationData=>{
     res.json(reservationData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })
 router.post("/",(req,res)=>{
    Reservation.create({
    time_slot:req.body.time_slot,
    day:req.body.day,
    customer_id:req.body.customer_id
   }).then(reservationData=>{
    res.json(reservationData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})

module.exports = router;