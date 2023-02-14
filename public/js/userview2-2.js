const nodemailer = require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');

//*nodemailer set up
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

document.querySelector("#send-reservation").addEventListener("click",e=>{
  fetch("/api/reservation/user", {
    method: "GET",
    body: JSON.stringify(resvObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()).then((reservationData)=>{
    console.log(reservationData)
    sendEmail(reservationData)
})
})

var reservationSection =document.querySelector("#reservation-form")
var reservationProfile = document.querySelector("#restaurant-profile")
var cancleBtn = document.querySelector("#cancle-reservation")
cancleBtn.addEventListener("click",e=>{
  e.preventDefault();
  reservationSection.remove()
  var cancleMsg = document.createElement("p")
  cancleMsg.textContent = "Your reservation has been cancled successfully."
  reservationProfile.append(cancleMsg)
  cancleBtn.remove()
  fetch("/api/reservation", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res=>{
    if(res.ok){
        return
    }else{
        alert("wrong email or password")
    }
})
})













