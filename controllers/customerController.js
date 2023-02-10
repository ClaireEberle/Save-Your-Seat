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
 //user Signup
 router.post("/",(req,res)=>{
    console.log(req.body);
   Customer.create({
    email:req.body.email,
    password:req.body.password
   }).then(userData=>{
    req.session.userId = userData.id;
    req.session.userEmail = userData.email;
    res.json(userData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:err})
   })
})
router.post("/login", (req,res)=>{
Customer.findOne({
   where:{
      email:req.body.email,
   },
})
.then((customerObj)=>{
if(!customerObj){
   return res.status(401).json({msg:"invalid credentials"});
}if(bcrypt.compareSync(req.body.password, customerObj.password)){
   req.session.customerId = customerObj.id;
   req.session.Data = {
      username: customerObj.username,
      email:customerObj.email
   };
   req.session.loggedIn = true;

   return res.json(customerObj);
}else{
   return res.status(401).json({msg:"invalid credentials"});
}
})
.catch((err)=>{
   console.log(err);
   res.status(500).json({
      msg:"something went wrong",
      err,
   });
});
});


module.exports = router;