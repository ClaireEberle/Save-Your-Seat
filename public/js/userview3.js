let sendEmailBtn = document.querySelector("#send-email-btn");

sendEmailBtn.addEventListener("click", (e) => {
  fetch("/api/reservation/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((rsvdata) => {
      console.log(rsvdata);
      const emailObj = {
        customer_name: rsvdata.Customer.name,
        restaurant: rsvdata.Owner.restaurant_name,
        date: rsvdata.reservation_date,
        time: rsvdata.reservation_time,
        party_size: rsvdata.party_size,
        email: rsvdata.Customer.email,
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
});

document
  .querySelector("#check-reservation-btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/seereservation";
  });

document.querySelector("#cancle-btn").addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("/makereservation");
});

document.querySelector("#menu-btn").addEventListener("click", (e) => {
  e.preventDefault();
  //TODO:make menu routes
  fetch("api/dish,"{
    method:"GET",
    headers:{
      "content-Type":"application/json"
  }
  }.then(res=>{
    if(res.ok){
      location.href="/****"
    }else{
      alert("something went wrong")
    }
  }))
  location.replace("/menu");
});
