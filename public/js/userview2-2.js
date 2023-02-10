document.querySelector("#edit-reservation").addEventListener("click",e=>{
  e.preventDefault();
  location.replace('/makereservation')
})

var reservationSection =document.querySelector("#reservation-form")
var reservationProfile = document.querySelector("#restaurant-profile")
var cancleBtn = document.querySelector("#cancle-reservation")
document.querySelector("#cancle-reservation").addEventListener("click",e=>{
  e.preventDefault();
  reservationSection.remove()
  var cancleMsg = document.createElement("p")
  cancleMsg.textContent = "Your reservation at Restaurant Name has been cancled successfully."
  reservationProfile.append(cancleMsg)
  cancleBtn.remove()
})













