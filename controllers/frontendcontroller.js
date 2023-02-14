const express = require("express");
const router = express.Router();
const { Owner, Customer, Reservation, Menu, Dish, Time } = require("../models");

router.get("/makereservation", (req, res) => {
  Owner.findAll().then(ownerData=>{
    const hbsOwner= ownerData.map(owner=>owner.toJSON())
    console.log(hbsOwner)
    res.render("userview2-1",{Owner:hbsOwner});
  })
});

router.get("/reservation", (req, res) => {
  if (!req.session.userId) {
    res.redirect("/customerLogin");
   }
  Reservation.findOne({where:{CustomerID:req.session.userId}})
    .then((data) => {
    res.json(data);
  });
});

router.get("/makereservation/confirmed", (req, res) => {
  Customer.findByPk(req.session.userId).then((customerData)=>{
    const hbsData = customerData.toJSON();
  res.render("userview3", hbsData);
})
});

router.get("/seeallreservation", (req, res) => {
  if (!req.session.userId) {
   res.redirect("/customerLogin");
  }
  Reservation.findAll({where:{CustomerId:req.session.userId}
  ,include:[Owner,Customer]}).then((userdata) => {
    // if(!Customer.Reservation){
    //   res.json(userdata)
    // }
    const hbsData = userdata.toJSON();
    res.render("seeallreservation",hbsData);
})
})

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
    res.render("userview2-2",hbsData);
})
})

router.get("/reservation", (req, res) => {
  if (!req.session.userId) {
   res.redirect("/customerLogin");
  }
  Reservation.findOne({where:{CustomerId:req.session.userId}
  ,include:[Owner,Customer]}).then((userdata) => {
    // if(!Customer.Reservation){
    //   res.json(userdata)
    // }
    const hbsData = userdata.toJSON();
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
  //  console.log(ownerData);
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
    console.log(req.session.userId)
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

//req should look like this
// {
// 	"reservation_date" : "2023-02-14",
// 	"party_size": 2,
// 	"reservation_time" : "18:00",
// 	"OwnerId" : 1,
// 	"CustomerId": req.session.userId
// }


router.post("/makereservation", (req, res) => {
  Reservation.findAll({
    where: {
      reservation_date : req.body.reservation_date,
      reservation_time : req.body.reservation_time,
    }
  }).then(reservationData =>{
    Owner.findOne({
      where: {
        id : req.body.OwnerID
      }
    }).then((Ownerdata)=>{
          if(reservationData.length < Ownerdata.table_capacity){
            Reservation.create(req.body
              ).then(reservationData=>{
                res.json(reservationData)
              }).catch(err=>{
                console.log(err);
                res.status(500).json({msg:err})
              })
            }
            if(reservationData.length == Ownerdata.table_capacity){
              Time.destroy({
                where: {
                  date : req.body.reservation_date,
                  time_available : req.body.reservation_time,
                }
              })
              res.json({msg: 'Please choose different time'})
            }
        })
    })
});

/* req.body should look like this...
    {
        "restaurant_name": "The Wandering Hedgehog",
        "date" : "2023-02-18"
    }
  */

router.post("/restaurant", (req, res) => {
  Owner.findOne({
    where: {
      restaurant_name : req.body.restaurant_name

    }
  }).then((data)=>{
    // console.log('Owner',data.dataValues.id)
    openTime = parseInt(data.open_time);
    closeTime = parseInt(data.close_time)
    let time_slot = [];
    for(let i = openTime; i < closeTime ; i++){
      time_slot.push(i.toString() + ":00")
    }
    res.json(data)
    // console.log(time_slot)
    Time.findAll({
      where:{
        date: req.body.date,
        OwnerId : data.dataValues.id
      }
    }).then((Timedata)=>{
      if(Timedata.length > 0){
        console.log("==========")
        console.log(Timedata.length)
        const hbsData = Timedata.toJSON();
        res.render("userview2-1", hbsData)
        res.json(Timedata)
      }else {
        time_slot.forEach(element =>{
          Time.create({
            time_available: element,
            date: req.body.date,
            OwnerId : data.dataValues.id
          })
        })
      }
    })
    
  })
})

// req.body should look like this
// {
//   "date" : "2023-02-14",
//   "OwnerId" : 1
// }

router.post("/time", (req, res) => {
  Time.findAll(
    {
    where:{
      date : req.body.date,
      OwnerId : req.body.OwnerId
    }
  }
  )
    .then((userData) => {
      res.render("userview2-1",userData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

// router.post("/time", (req, res) => {
//   Time.create(req.body)
//   .then((userData) => {
//     res.json(userData);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json({ msg: err });
//   });
// });


module.exports = router;
