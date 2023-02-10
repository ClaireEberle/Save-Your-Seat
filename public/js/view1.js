document.querySelector("#restaurantBtn").addEventListener("click",e=>{
    e.preventDefault();

    location.href="/restaurantLogin";
})

document.querySelector("#customerBtn").addEventListener("click",e=>{
    e.preventDefault();

    location.href="/customerLogin";
})