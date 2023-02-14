const nodemailer = require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');

application.post('/send',(req,res)=>{
    const output = `
    <h3>Dear ${req.body.name}</h3>
    <br>
    <p>You have a reservation with ${req.body.restaurant} on ${req.boy.date}</p>
    <p>at ${req.body.time}.</p>
    <p>Pary size is ${req.body.party_size}</p>
    
    <p>We are looking forward to seeing you and your party group.</p>
    
    <h3>${req.body.restaurant}</h3>
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
        to:"yanqinglou@outlook.com",
        subject:"sending email with node.js",
        text:output
    };
    transporter.sendMail(options,  function(err,info){
        if(err){
            console.log(err);
            return
        }
        console.log(info.response)
        res.render('contact',{msg:"Email has been sent.Please check your email."})
        })
})

module.exports = {sendEmail}
