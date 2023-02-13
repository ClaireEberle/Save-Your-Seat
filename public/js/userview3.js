document.querySelector("#check-reservation-btn").addEventListener("click",e=>{
  e.preventDefault();
  location.href = '/seereservation'
})

document.querySelector("#reschedule-btn").addEventListener("click",e=>{
  e.preventDefault();
  location.replace('/makereservation')
})

document.querySelector("#menu-btn").addEventListener("click",e=>{
  e.preventDefault();
  //TODO:make menu routes
  location.replace('/menu')
})















