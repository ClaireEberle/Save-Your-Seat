document.querySelector("#create-reservation").addEventListener("click",e=>{
    e.preventDefault();
    //TODO: href depends on controllers
    location.href="/makereservation";
})

document.querySelector("#see-reservation").addEventListener("click",e=>{
    e.preventDefault();
    //TODO: href depends on controllers
    location.href="/seereservation";
})