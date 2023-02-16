const express = require("express");
const router = express.Router();
const { Customer, Reservation } = require("../models");
const bcrypt = require("bcrypt");



router.post("/timesearch", async (req, res) => {
    const owner = await Owner.findOne({ where: { restaurant_name: req.body.restaurant_name } })
    // console.log('Owner', owner.dataValues.id)
    openTime = parseInt(owner.open_time);
    closeTime = parseInt(owner.close_time)
    let time_slot = [];
    for (let i = openTime; i < closeTime; i++) {
      time_slot.push(i.toString() + ":00")
    }
    let timeArray = [];
    const time = await Time.findAll({
      where: {
        date: req.body.date,
        OwnerId: owner.dataValues.id
      }
    })
    for(let i = 0; i < time.length; i++){
      timeArray.push(time[i])
    }
    if (time.length == 0) {
      for (let i = 0; i < time_slot.length; i++) {
        const newTime = await Time.create({
          time_available: time_slot[i],
          date: req.body.date,
          OwnerId: owner.dataValues.id
        })
        timeArray.push(newTime.dataValues);
  
      }
    } 
    // console.log(timeArray)
    const hbsData =timeArray.map(time=>time.toJSON())
    console.log("-")
    console.log(hbsData)
    // res.render("userview2-1",{time:hbsData})
  })