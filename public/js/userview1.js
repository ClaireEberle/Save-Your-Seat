document.querySelector("#create-reservation").addEventListener("click",e=>{
    e.preventDefault();
    //TODO: href depends on controllers
    location.href="/makereservation";
})

document.querySelector("#see-reservation").addEventListener("click",e=>{
    e.preventDefault();
    fetch("/reservation",{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/seereservation"
        }else{
            noResvAlert = document.createElement("p")
            noResvAlert.textContent = "Currently you don't have any reservation with us. Please click on the schedule button."
            document.querySelector(".userview-form").append(noResvAlert)
        }
    })
})