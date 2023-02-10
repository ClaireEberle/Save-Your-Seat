document.querySelector("#restaurantBtn").addEventListener("click",e=>{
    e.preventDefault();

    location.href="/restaurantLogin";
})

document.querySelector("#customerBtn").addEventListener("click",e=>{
    e.preventDefault();

    location.href="/customerLogin";
})
document.querySelector("#newcustomerBtn").addEventListener("click",e=>{
    e.preventDefault();

    location.href="/customerSignup";
})