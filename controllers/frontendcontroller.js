const express = require("express");
const router = express.Router();
const { Owner, Customer, Reservation, Menu, Dish, Time } = require("../models");

router.get("/makereservation", (req, res) => {
  Owner.findAll().then((ownerData) => {
    const hbsOwner = ownerData.map((owner) => owner.toJSON());
    console.log(hbsOwner);
    res.render("userview2-1", { Owner: hbsOwner });
  })
});

router.get("/reservation", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/customerLogin");
  }
  Reservation.findOne({ where: { CustomerID: req.session.userId } }).then(
    (data) => {
      res.json(data);
    }
  );
});

router.get("/makereservation/confirmed", (req, res) => {
  Customer.findByPk(req.session.userId).then((customerData) => {
    const hbsData = customerData.toJSON();
    res.render("userview3", hbsData);
  });
});

router.get("/seeallreservation", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/customerLogin");
  }
  Reservation.findAll({
    where: { CustomerId: req.session.userId }
    , include: [Owner, Customer]
  }).then((rsvdata) => {
    // if(!Customer.Reservation){
    //   res.json(userdata)
    // }
    const hbsData = rsvdata.map(rsv=>rsv.toJSON());
    console.log(hbsData)
    res.render("seeallreservation", {reservation:hbsData});
  })
})

router.get("/seereservation/:id", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/customerLogin");
  }
  Reservation.findByPk(req.params.id
    , { include: [Owner, Customer] }).then((userdata) => {
      // if(!Customer.Reservation){
      //   res.json(userdata)
      // }
      const hbsData = userdata.toJSON();
      res.render("userview2-2", hbsData);
    })
})

router.get("/reservation", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/customerLogin");
  }
  Reservation.findOne({
    where: { CustomerId: req.session.userId },
    include: [Owner, Customer],
  }).then((userdata) => {
    // if(!Customer.Reservation){
    //   res.json(userdata)
    // }
    const hbsData = userdata.toJSON();
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
  Owner.findByPk(req.session.ownerId).then((ownerData) => {
    console.log(ownerData);
    const hbsData = ownerData.toJSON();
    res.render("view3-2", hbsData);
  });
});

router.get("/customerLogin", (req, res) => {
  res.render("view2");
});

router.get("/customerSignup", (req, res) => {
  res.render("view2-1");
});

router.get("/customers", (req, res) => {
  Customer.findByPk(req.session.userId).then((customerData) => {
    console.log(req.session.userId);
    const hbsData = customerData.toJSON();
    res.render("userview1", hbsData);
  });
});

router.get("/viewReservations", (req, res) => {
  if (!req.session.ownerId) {
    return res.redirect("/restaurantLogin");
  }
  Owner.findByPk(req.session.ownerId, {
    include: [Reservation],
  }).then((ownerData) => {
    // if(!Owner.Reservation){
    //   return res.render("view3-2")
    // }
    const hbsData = ownerData.toJSON();
    console.log(hbsData);
    res.render("view3-2-1",{ 
      owner: hbsData,
      hasRes:hbsData.Reservations[0]
    }
    );
  });
});

router.get("/menu", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/customerLogin");
  }
  Customer.findByPk(req.session.userId,{
    include:[{all:true,nested:true}]
  }).then((userData)=>{
    const hbsData = userData.toJSON();
    const Ownerdata = hbsData.Reservations[0].Owner
    const Dishdata = hbsData.Reservations[0].Owner.Dishes
    console.log(Dishdata)
    console.log(Ownerdata)

    res.render("userview3-1", Ownerdata)
  });
})


router.get("/updateMenu", (req, res) => {
  if (!req.session.ownerId) {
    return res.redirect("/restaurantLogin");
  }
  Owner.findByPk(req.session.ownerId, {
    include: [Dish],
  }).then((ownerData) => {
    // if(!Owner.Dish){
    //   return res.json(ownerData)
    // }

    const hbsDish = ownerData.toJSON();
    console.log(hbsDish);
    res.render("view3-2-2", hbsDish);
  });
});

router.get("/updateTables", (req, res) => {
  if (!req.session.ownerId) {
    return res.redirect("/restaurantLogin");
  }
  Owner.findByPk(req.session.ownerId).then((ownerData) => {
    console.log(ownerData);
    const hbsData = ownerData.toJSON();
    console.log(hbsData);
    res.render("view3-2-3", hbsData);
  });
});

//req should look like this
// {
// 	"reservation_date" : "2023-02-14",
// 	"party_size": 2,
// 	"reservation_time" : "18:00",
// 	"OwnerId" : 1,
// 	"CustomerId": req.session.userId
// }

// router.post("/makereservation", async (req, res) => {
//   const reservation = await Reservation.findAll({
//     where: {
//       reservation_date: req.body.reservation_date,
//       reservation_time: req.body.reservation_time,
//     }
//   })
//   const owner = await Owner.findOne({
//       where: {
//         id: req.body.OwnerId
//       }
//   })
//   if (reservation.length < owner.table_capacity) {
//     const newReservation = await Reservation.create(req.body)
//     res.json(newReservation)
//   }
//   else if (reservation.length == owner.table_capacity) {
//     const timeRemove = await Time.destroy({
//           where: {
//             date: req.body.reservation_date,
//             time_available: req.body.reservation_time,
//           }
//     })
//     res.json({ msg: 'Please choose different time' })
//     }
// })


/* req.body should look like this...
    {
        "restaurant_name": "The Wandering Hedgehog",
        "date" : "2023-02-18"
    }
  */



// req.body should look like this
// {
//   "date" : "2023-02-14",
//   "OwnerId" : 1
// }

router.post("/time", (req, res) => {
  Time.findAll(
    {
      where: {
        date: req.body.date,
        OwnerId: req.body.OwnerId
      }
    }
  )
    .then((userData) => {
      res.render("userview2-1", userData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.get("/allmenus",(req,res)=>{
Owner.findAll({
  include: [Dish],
}).then((ownerData)=>{
  const newData = ownerData.map((owner)=>owner.toJSON());
  console.log(newData);
  const DishData = newData.Dishes;
  console.log(DishData)
  res.render("allmenus", {
    Owner:newData,
    dishData:DishData
  })
})
})

module.exports = router;
