const express = require('express');
const router = express.Router();
const {Menu, Dish} = require('../models');

router.get("/",(req,res)=>{
    Dish.findAll().then(dishData=>{
     res.json(dishData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:err})
    })
 })

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