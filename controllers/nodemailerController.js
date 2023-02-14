const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');

router.post('/',(req,res)=>{
    const output = `
    Dear ${req.body.customer_name}

    You have a reservation with ${req.body.restaurant} on ${req.body.date}
    at ${req.body.time}.
    Pary size is ${req.body.party_size}
    
    We are looking forward to seeing you and your party group.
    
    ${req.body.restaurant}
    Save your seat.app
    `
    
    const transporter = nodemailer.createTransport({
        host:"smtp.office365.com",
        port:587,
        secure:false,
        auth:{
            user:"makeonereservation@outlook.com",
            pass:"Team9project2"
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    
    const options = {
        from:"makeonereservation@outlook.com",
        //TODO:change into user email: req.body.email
        to:"yanqinglou@outlook.com",
        subject:"Reservation Info",
        text:output
    };
    transporter.sendMail(options,  function(err,info){
        if(err){
            console.log(err);
            return
        }
        console.log(info.response)
        res.render('userview2-2',{msg:"Email has been sent.Please check your email."})
        })
})

module.exports = router;
