const express = require('express');
const router = express.Router();
//TODO:Activation upon completion of models
// const {Customer,Reservation,Owner} = require('../models');

router.get("/customers",(req,res)=>{
    res.render("userview1")
    })

router.get("/",(req,res)=>{
    res.render("restaurantLogin")
    })
    

module.exports = router;