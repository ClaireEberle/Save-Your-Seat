var availableTimeDiv = document.querySelector("#available-time");
let today = new Date();
let alertMsg = document.querySelector("#alertmsg");
let makeReservationForm = document.querySelector("#make-reservation-form");

document.querySelector("#findtime").addEventListener("click", (e) => {
  e.preventDefault();
  let pickedDate = new Date(document.querySelector("#datepicker").value);
  if (alertMsg.textContent) {
    alertMsg.textContent = "";
  }
  if (!pickedDate) {
    alertMsg.textContent = "Pleaser select a date.";
    return;
  }
  if (availableTimeDiv.childElementCount !== 0) {
    return;
  }
  if (pickedDate < today) {
    alertMsg.textContent =
      "sorry, you and I both know that we can't go back in time.";
    return;
  }
  makeReservationForm.append(alertMsg);
  // if (document.querySelector("#datepicker").value<today.()) {
  const customerObj = { id: 1 };
  fetch("/makereservation", {
    method: "POST",
    body: JSON.stringify(customerObj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let openTime = parseInt(data.open_time, 10);
      let closeTime = parseInt(data.close_time, 10);
      document.querySelector("#findtime").textContent =
        "Confirm your reservation";
      for (var i = openTime; i < closeTime; i++) {
        var timeSlotBtn = document.createElement("p");
        timeSlotBtn.textContent = i.toString() + ":00";
        timeSlotBtn.classList.add("form-btn", "time-slot-btn");
        availableTimeDiv.append(timeSlotBtn);
      }
    });
  // }else{
  //   return
});

availableTimeDiv.addEventListener("click",(e)=>{
  if(!e.target.matches("p")){
    return
  }
  e.target.style.color = "#c1121f";
  e.target.style.backgroundColor = "#ffff";
})

//Jquery function
//* datepicker
$(function () {
  $("#datepicker").datepicker();
});

//* drop down
$(function () {
  $("#speed").selectmenu();
});
