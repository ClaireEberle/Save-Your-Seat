const nodemailer = require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');

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
    text:"wow!that's amazing"
};

transporter.sendMail(options,  function(err,info){
if(err){
    console.log(err);
    return
}
console.log(info.response)
})