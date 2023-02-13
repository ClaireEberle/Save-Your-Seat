const nodemailer = require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');


function sendEmail(context){
    return new Promise((resolve,reject)=>{
        const transporter = nodemailer.createTransport({
            service:"hotmail",
            auth:{
                user:"makeonereservation@outlook.com",
                pass:"Team9project2"
            }
        });
        
        const options = {
            from:"makeonereservation@outlook.com",
            to:"yanqinglou@outlook.com",
            subject:"sending email with node.js",
            text:context
        };
        
        transporter.sendMail(options,  function(err,info){
        if(err){
            console.log(err);
            return
        }
        console.log(info.response)
        })
    })
}

sendEmail("Hello World")

module.exports=sendEmail
