const express = require('express');
const router = express.Router();
const {Menu, Owner} = require('../models');

router.get("/",(req,res)=>{
    Menu.findAll({include:[Owner]}).then(ownerData=>{
    
     res.json(ownerData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })

router.post("/",(req,res)=>{

    Menu.create(
        req.body
        ).then(menuData=>{
            res.json(menuData)
        }).catch(err=>{
            console.log(err);
            res.status(500).json({msg:err})
        })
    })



 module.exports = router;