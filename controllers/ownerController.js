const express = require("express");
const router = express.Router();
const { Time, Owner, Reservation } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  Owner.findAll()
    .then((ownerData) => {
      // {include:[{model:Reservation, as: 'reservation'}]}
      res.json(ownerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.get("/:id", (req, res) => {
  Owner.findByPk(req.params.id, {
    //{include:[{model:Reservation, as: 'reservation'}]}
  })
    .then((ownerData) => {
      res.json(ownerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: err });
    });
});

router.post("/", (req, res) => {
  console.log(req.body)
  Owner.create(req.body)
    .then((ownerData) => {
      req.session.ownerId = ownerData.id
      req.session.ownerEmail = ownerData.email;
      res.json(ownerData);
      // create time
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.post("/search", (req, res) => {
   Owner.findOne({
     where: { restaurant_name: req.body.restaurant_name }
   })
     .then((ownerData) => {
      res.json(ownerData)
     })
     .catch((err) => {
       console.log(err);
       res.status(500).json({ msg: err });
     });
 });

router.post("/login", (req, res) => {
  Owner.findOne({
    where: {
      email: req.body.email,
    }
  })
    .then((ownerData) => {
      if (!ownerData) {
        return res.status(401).json({ msg: "incorrect email or password" });
      } else {
        if (bcrypt.compareSync(req.body.password, ownerData.password)) {
          req.session.ownerId = ownerData.id;
          req.session.ownerEmail = ownerData.email;
          return res.json(ownerData);
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

router.put("/editTables", (req, res) => {
  if (!req.session.ownerId) {
    return res.status(403).json({ msg: "login before editing tables" });
  }
  Owner.update(
    {
      table_capacity: req.body.table_capacity,
    },
    {
      where: {
        id: req.session.ownerId,
      },
    }
  );
});

router.put("/editTime", (req, res) => {
  if (!req.session.ownerId) {
    return res.status(403).json({ msg: "login before editing tables" });
  }
  Owner.update(
    {
      open_time: req.body.open_time,
      close_time: req.body.close_time,
    },
    {
      where: {
        id: req.session.ownerId,
      },
    }
  );
});

module.exports = router;
