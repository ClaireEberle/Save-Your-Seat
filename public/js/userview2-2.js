var reservationFormDiv = document.querySelector("#see-reservation-form");
var sendEmailBtn = document.querySelector("#send-reservation");

//send email through nodemailer
sendEmailBtn.addEventListener("click", (e) => {
  let restaurantName = document.querySelector("#restaurant-name").textContent;
  let customerName = document.querySelector("#customer_name").textContent;
  let partyDate = document.querySelector("#date").textContent;
  let partyTime = document.querySelector("#time").textContent;
  let partySize = document.querySelector("#party_size").textContent;
  let customerEmail = document.querySelector("#email").textContent;
  //email body
  const emailObj = {
    customer_name: customerName,
    restaurant: restaurantName,
    date: partyDate,
    time: partyTime,
    party_size: partySize,
    email: customerEmail,
  };
  console.log(emailObj);
  fetch("/email", {
    method: "POST",
    body: JSON.stringify(emailObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return;
    } else {
      alert("email is not sent. Please try agian.");
    }
  });
});

var reservationSection = document.querySelector("#reservation-form");
var reservationProfile = document.querySelector("#restaurant-profile");
var cancleBtn = document.querySelector("#cancle-reservation");

//*cancle a reservation
cancleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //*find reservation and delete data
  fetch("/api/reservation", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log(res)
      reservationSection.remove();
      var cancleMsg = document.createElement("p");
      cancleMsg.textContent = "Your reservation has been cancled successfully.";
      reservationProfile.append(cancleMsg);
      cancleBtn.remove();
      sendEmailBtn.remove();
      makeReservationBtn = document.createElement("a");
      makeReservationBtn.classList.add("form-btn");
      makeReservationBtn.textContent = "Make reservation";
      makeReservationBtn.href = "/makereservation";
      reservationFormDiv.append(makeReservationBtn);
    } else {
      alert("something went wrong");
    }
  });
});
