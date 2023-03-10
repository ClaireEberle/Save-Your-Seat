let sendEmailBtn = document.querySelector("#send-email-btn");
let emailMsg = document.querySelector("#email-msg")

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
          emailMsg.textContent="Reservation email has been sent to your email"
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
    location.href = "/seeallreservation";
  });

document.querySelector("#menu-btn").addEventListener("click", (e) => {
  e.preventDefault();
  //TODO:make menu routes
  fetch("/api/reservation/dish", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  // }).then((res) => res.json())
  
  }).then(res=>{
    if (res.ok){
     location.href="/menu";
   
    }else{
      alert("something went wrong")
    }

  // .then((resData)=>{
  //   const ownerID = JSON.stringify(resData)
  //   console.log(ownerID)
  })
  // location.replace("/menu")
})

//   fetch("api/dish,"{
//     method:"GET",
//     headers:{
//       "content-Type":"application/json"
//   }
//   }.then(res=>{
//     if(res.ok){
//       location.href="/****"
//     }else{
//       alert("something went wrong")
//     }
//   }))
//   location.replace("/menu");
// });
