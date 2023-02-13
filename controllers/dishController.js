const express = require('express');
const router = express.Router();
const {Menu, Dish, Owner} = require('../models');

router.get("/",(req,res)=>{
    Dish.findAll({include:[Owner]}).then(dishData=>{
     res.json(dishData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })

 router.post("/", (req,res)=>{
    if(!req.session.ownerId){
        return res.status(403).json({msg:"login first"})
     }
     Dish.create({
        dishes:req.body.dishes,
        side:req.body.side,
        OwnerId:req.body.OwnerId
     }).then(dishData=>{
        res.json(dishData)
     }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:err})
     })
 })

 router.put("/editdish",(req,res)=>{
    if(!req.session.ownerId){
        return res.status(403).json({msg:"login before editing the menu"});
     }
     Dish.update(
        {
           dishes:req.body.dishes,
           side: req.body.side
        },
        {
           where:{
              OwnerId:req.session.ownerId
           }
        }
     )
 } )

// router.put("/editdish", (req,res)=>{
//     if(!req.session.ownerId){
//         return res.status(403).json({msg:"you must login before editing dishes"})
//     }
//     Dish.update(
//         {
//             dishes:req.body.dishes,
//             sides:req.body.sides,
//         },
//         where:{
//             id:req.session.ownerId //how to connect dish to restaurant here?
//         }
//     )
// })

module.exports = router;