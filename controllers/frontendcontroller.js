const express = require("express");
const router = express.Router();
const { Owner, Customer, Reservation } = require("../models");

router.get("/makereservation", (req, res) => {
  res.render("userview2-1");
});

router.post("/makereservation", (req, res) => {
  Owner.findByPk(req.body.id).then((data) => {
    res.json(data);
  });
});

router.get("/makereservation/confirmed", (req, res) => {
  res.render("userview3", req.session.email);
});

router.get("/seereservation", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/customerLogin");
  }
  User.findByPk(req.session.userId, {
    include: [Reservation],
  }).then((userdata) => {
    console.log(userdata);
    const hbsData = userdata.toJSON();
    console.log("==============================");
    console.log(hbsData);
    res.render("userview2-2", hbsData);
  });
});

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

router.get("/customerLogin", (req, res) => {
  res.render("view2");
});

router.get("/customerSignup", (req, res) => {
  res.render("view2-1");
});

router.get("/customers", (req, res) => {
  res.render("userview1");
});

module.exports = router;
