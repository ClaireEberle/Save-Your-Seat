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
    }).then((res) => res.json()).then((data)=>{
        console.log(data)
        if(data){
            location.href="/seeallreservation"
        }else{
            noResvAlert = document.createElement("p")
            noResvAlert.textContent = "Currently you don't have any reservation with us."
            document.querySelector(".userview-form").append(noResvAlert)
        }
    })
    })