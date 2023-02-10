const express = require("express");
const router = express.Router();
const { Owner, Customer, Reservation } = require("../models");

router.get("/makereservation",(req,res) =>{
    res.render("userview2-1");
})

router.post("/makereservation", (req, res) => {
  Owner.findAll({
    where: {
      available_date: req.body.available_date,
      available_meal: req.body.available_meal,
      table_capacity: req.body.table_capacity,
    },
  }).then((data) => {
    console.log(data)
    const availableData = data.map(available_time=>available_time.toJSON())
    console.log(availableData)
    res.render("",{
        availableData
    })
})
  });

router.get("/seereservation",(req,res) =>{
    res.render("userview2-2");
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
  res.render("view3-2");
});

router.get("/customerLogin", (req,res)=>{
  res.render("view2")
})
router.get("/customerSignup", (req,res)=>{
  res.render("view2-0")
})

router.get("/customers", (req, res) => {
  res.render("userview1");
});

module.exports = router;
