// import { sendEmail } from "./nodemailer";

document.querySelector("#send-reservation").addEventListener("click",e=>{
  fetch("/api/reservation/user", {
    method: "GET",
    body: JSON.stringify(resvObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()).then((reservationData)=>{
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













