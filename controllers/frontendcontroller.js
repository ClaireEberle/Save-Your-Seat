const express = require('express');
const router = express.Router();
//TODO:Activation upon completion of models
// const {Customer,Reservation,Owner} = require('../models');

router.get("/customers",(req,res)=>{
    res.render("userview1")
    })

module.exports = router;