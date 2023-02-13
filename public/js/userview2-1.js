var availableTimeDiv = document.querySelector("#available-time");
let today = new Date();
let alertMsg = document.querySelector("#alertmsg");
let makeReservationForm = document.querySelector("#make-reservation-form");
let pickedTimeDiv = document.querySelector("#picked-time-div");
var restaurantId ="";

document.querySelector("#findtime").addEventListener("click", (e) => {
  e.preventDefault();
  let partySize = document.querySelector("#party-size").value;
  let pickedRestaurant = document.querySelector("#restaurant").value;
  let inputDate = document.querySelector("#datepicker").value;
  let pickedDate = new Date(inputDate);
  console.log(pickedRestaurant)
  if (alertMsg.textContent) {
    alertMsg.textContent = "";
  }
  if (!inputDate) {
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
  const customerInput = { restaurant_name: pickedRestaurant };
  console.log(customerInput)
  fetch("/api/owner/search", {
    method: "POST",
    body: JSON.stringify(customerInput),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((ownerdata) => {
      console.log(ownerdata)
      let openTime = parseInt(ownerdata.open_time, 10);
      let closeTime = parseInt(ownerdata.close_time, 10);
      restaurantId = ownerdata.id
      for (var i = openTime; i < closeTime; i++) {
        var timeSlotBtn = document.createElement("button");
        timeSlotBtn.textContent = i.toString() + ":00";
        timeSlotBtn.classList.add("form-btn", "time-slot-btn");
        availableTimeDiv.append(timeSlotBtn);
      }
    })
    .then(() => {
      availableTimeDiv.addEventListener("click", (e) => {
        console.log;
        e.preventDefault();
        if (e.target.matches("button")) {
          let selectedTime= document.querySelector("#selected-time");
          selectedTime.textContent = e.target.textContent
        }
      });
    })
    .then(() => {
      let confirmResvBtn = document.createElement("button");
      confirmResvBtn.textContent = "Confirm your reservation";
      confirmResvBtn.classList.add("form-btn");
      makeReservationForm.append(confirmResvBtn);
      confirmResvBtn.addEventListener("click", () => {
        let selectedTime =document.querySelector("#selected-time").textContent;
        const resvObj = {
          reservation_date: inputDate,
          reservation_time: selectedTime,
          party_size: partySize,
          OwnerId:restaurantId
        };
        fetch("/api/reservation", {
          method: "POST",
          body: JSON.stringify(resvObj),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.ok) {
            location.href = "/makereservation/confirmed";
          } else {
            alert("trumpet sound");
          }
        });
      });
    });
});

//Jquery function
//* datepicker
$(function () {
  $("#datepicker").datepicker();
});

//* drop down
$(function () {
  $("#party-size").selectmenu();
});
$(function () {
  $("#restaurant").selectmenu();
});
