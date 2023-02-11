var availableTimeDiv = document.querySelector("#available-time");

document
  .querySelector("#make-reservation-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
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
        console.log(openTime, closeTime);
        for (var i = openTime; i <= closeTime; i++) {
          var timeSlotBtn = document.createElement("button");
          timeSlotBtn.textContent = i.toString() + ":00";
          timeSlotBtn.classList.add("form-btn","time-slot-btn");
          availableTimeDiv.append(timeSlotBtn);
        }
      });
  });

//Jquery function
//* datepicker
$(function () {
  $("#datepicker").datepicker();
});

//* drop down
$(function () {
  $("#speed").selectmenu();
});
