const express = require("express");
const router = express.Router();
const { Owner, Customer, Reservation, Menu, Dish } = require("../models");

router.get("/makereservation", (req, res) => {
  Owner.findAll().then(ownerData=>{
    const hbsOwner= ownerData.map(owner=>owner.toJSON())
    console.log(hbsOwner)
    res.render("userview2-1",{Owner:hbsOwner});
  })
});

router.post("/makereservation", (req, res) => {
  Owner.findOne(req.body).then((data) => {
    res.json(data);
  });
});

router.get("/makereservation/confirmed", (req, res) => {
  Customer.findByPk(req.session.userId).then((customerData)=>{
    const hbsData = customerData.toJSON();
  res.render("userview3", hbsData);
})
});

router.get("/seereservation", (req, res) => {
  if (!req.session.userId) {
   res.redirect("/customerLogin");
  }
  Reservation.findOne({where:{CustomerId:req.session.userId}
  ,include:[Owner,Customer]}).then((userdata) => {
    // if(!Customer.Reservation){
    //   res.json(userdata)
    // }
    const hbsData = userdata.toJSON();
    console.log("==============================");
    console.log(hbsData);
    res.render("userview2-2",hbsData);
})
})

router.get("/restaurantLogin", (req, res) => {
  res.render("view3");
});

router.get("/", (req, res) => {
  res.render("view1");
});

router.get("/newrestaurant", (req, res) => {
  res.render("view3-1");
});

router.get("/restaurants", (req, res) => {
 Owner.findByPk(req.session.ownerId).then((ownerData)=>{ 
   console.log(ownerData);
   const hbsData = ownerData.toJSON();
   res.render("view3-2", hbsData);
  })
});

router.get("/customerLogin", (req, res) => {
  res.render("view2");
});

router.get("/customerSignup", (req, res) => {
  res.render("view2-1");
});

router.get("/customers", (req, res) => {
  Customer.findByPk(req.session.userId).then((customerData)=>{
    const hbsData = customerData.toJSON();
    res.render("userview1",hbsData);
  })
});

router.get("/viewReservations", (req,res)=>{
  if(!req.session.ownerId){
    return res.redirect("/restaurantLogin")
  }
  Owner.findByPk(req.session.ownerId, {
    include: [Reservation],
  }).then((ownerData)=>{
    // if(!Owner.Reservation){
    //   return res.render("view3-2")
    // }
      const hbsData = ownerData.toJSON();
      console.log(hbsData)
      res.render("view3-2-1",
        hbsData);
  })
});

router.get("/updateMenu", (req,res)=>{
  if(!req.session.ownerId){
    return res.redirect("/restaurantLogin")
  }
  Owner.findByPk(req.session.ownerId, {
    include: [Dish]
  }).then((ownerData)=>{
    // if(!Owner.Dish){
    //   return res.json(ownerData)
    // }
  
    const hbsDish = ownerData.toJSON();
    console.log(hbsDish)
    res.render("view3-2-2", hbsDish);
  })
});

router.get("/updateTables", (req,res)=>{
  if(!req.session.ownerId){
    return res.redirect("/restaurantLogin")
  }
  Owner.findByPk(req.session.ownerId).then((ownerData)=>{
   console.log(ownerData);
   const hbsData = ownerData.toJSON();
   console.log(hbsData)
   res.render("view3-2-3", hbsData)
  })
})



module.exports = router;
