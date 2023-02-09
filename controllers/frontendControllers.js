const express = require('express');
const router = express.Router();
//const {Customer, Reservation} = require('../models');

router.get('/',(req,res)=>{
    res.render('home');
    
})

module.exports = router;