var availableTimeDiv = document.querySelector("#available-time");
let today = new Date();
let alertMsg = document.querySelector("#alertmsg");
let makeReservationForm = document.querySelector("#make-reservation-form");
let pickedTimeDiv = document.querySelector("#picked-time-div");
var restaurantId = "";

//*find time button
document.querySelector("#findtime").addEventListener("click", (e) => {
  e.preventDefault();
  let partySize = document.querySelector("#party-size").value;
  let pickedRestaurant = document.querySelector("#restaurant").value;
  let inputDate = document.querySelector("#datepicker").value;
  let pickedDate = new Date(inputDate);
  console.log(pickedRestaurant);
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
  const customerInput = {
    restaurant_name: pickedRestaurant,
    date: inputDate,
  };
  // console.log(customerInput);
  fetch("/restaurant", {
    method: "POST",
    body: JSON.stringify(customerInput),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const customerInput2 = {
        OwnerId: data.OwnerId,
        date: inputDate,
      };
      console.log(customerInput2)
      fetch("/time", {
        method: "POST",
        body: JSON.stringify(customerInput2),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          return;
        } else {
          alert("something is wrong. can't fine anything");
        }
      });
    })
    .then(() => {
      availableTimeDiv.addEventListener("click", (e) => {
        console.log;
        e.preventDefault();
        if (e.target.matches("button")) {
          let selectedTime = document.querySelector("#selected-time");
          selectedTime.textContent = e.target.textContent;
        }
      });
    })
    .then(() => {
      let confirmResvBtn = document.createElement("button");
      confirmResvBtn.textContent = "Confirm your reservation";
      confirmResvBtn.classList.add("form-btn");
      makeReservationForm.append(confirmResvBtn);
      confirmResvBtn.addEventListener("click", () => {
        let selectedTime = document.querySelector("#selected-time").textContent;
        const resvObj = {
          reservation_date: inputDate,
          reservation_time: selectedTime,
          party_size: partySize,
          OwnerId: restaurantId,
        };
        fetch("/api/reservation", {
          method: "POST",
          body: JSON.stringify(resvObj),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((reservationData) => {
            // sendEmail(reservationData)
            location.href = "/makereservation/confirmed";
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
