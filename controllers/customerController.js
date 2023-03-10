const express = require("express");
const router = express.Router();
const { Customer, Reservation } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  Customer.findAll({include:[Reservation]})
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.get("/:id", (req, res) => {
  Customer.findByPk(req.params.id, {
    //{include:[{model:Reservation, as: 'reservation'}]}
  })
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: err });
    });
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  Customer.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((userData) => {
      req.session.userId = userData.id;
      req.session.userEmail = userData.email;
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.post("/login", (req, res) => {
  Customer.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((userData) => {
      if (!userData) {
        return res.status(401).json({ msg: "incorrect email or password" });
      } else {
        if (bcrypt.compareSync(req.body.password, userData.password)) {
          req.session.userId = userData.id;
          req.session.userEmail = userData.email;
          return res.json(userData);
        } else {
          return res.status(401).json({ msg: "incorrect email or password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.delete("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ msg: "Unable to log out" });
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
