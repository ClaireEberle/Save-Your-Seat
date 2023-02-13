const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(transporter,{
    service:"hotmail",
    auth:{
        user:"makeonereservation@outlook.com",
        pass:"Team9project2"
    }
});