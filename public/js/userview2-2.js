var reservationFormDiv = document.querySelector("#see-reservation-form")
var sendEmailBtn = document.querySelector("#send-reservation").
sendEmailBtn.addEventListener("click",e=>{
  fetch("/api/reservation/user", {
    method: "GET",
    body: JSON.stringify(resvObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json()).then((reservationData)=>{
    console.log(reservationData)
    // sendEmail(reservationData)
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
  sendEmailBtn.remove()
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
}).then(()=>{
  makeReservationBtn = document.createElement("a")
  makeReservationBtn.classList.add("form-btn")
  makeReservationBtn.textContent = "Make reservation"
  makeReservationBtn.href = "/makereservation"
  reservationFormDiv.append(makeReservationBtn)
})
})













