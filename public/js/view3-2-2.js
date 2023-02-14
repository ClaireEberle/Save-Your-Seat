//----------------delete dish from menu-------------------------

document.querySelectorAll('.delBtn').forEach(button=>{
button.addEventListener("click", (e)=>{
   e.preventDefault();
const dishid = e.target.getAttribute("id");
console.log(dishid)
    fetch(`/api/dish/${dishid}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          location.reload();
        } else {
          alert("something went wrong");
        }
      });
    });
})
//-----------------add dish to menu------------------------------
document.querySelector("#add-dish").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#dish-form-div").classList.remove("hide");
});
document.querySelector("#add-dish-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const menuObj = {
    dishes: document.querySelector("#addDish").value,
    side: document.querySelector("#addSide").value,
  };
  fetch("/api/dish", {
    method: "POST",
    body: JSON.stringify(menuObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.reload();
    } else {
      alert("something went wrong");
    }
  });
});
document.querySelector("#cancel-new-dish").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#dish-form-div").classList.add("hide");
});
