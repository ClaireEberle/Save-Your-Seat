document.querySelector("#viewresBtn").addEventListener("click",e=>{
    e.preventDefault();
    fetch("/api/reservation",{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }
}).then(res=>{
    if (res.ok){
        location.href='/viewReservations'
    }else{
        // noResvAlert = document.createElement("p")
        // noResvAlert.textContent = "No reservations have been scheduled"
        document.querySelector("#no-res").classList.remove("hide")
    }
})
})

   //TODO:display reservations on page

   document.querySelector("#updateMenuBtn").addEventListener("click",e=>{
    e.preventDefault();
    fetch("/api/dish", {
        method:"GET",
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if (res.ok) {
            location.href="/updateMenu" 
        }else{
            alert("something went wrong")
        }
        
   
 
})
   })

//TODO: Create menu page with update options

// document.querySelector("#updateTablesBtn").addEventListener("click",e=>{
//     e.preventDefault();
//  location.replace('/updateTables')
// })

document.querySelector("#updateTablesBtn").addEventListener("click",e=>{
    document.querySelector("#update-table-form").classList.remove("hide");
})

document.querySelector("#updateTble").addEventListener("click", (e) => {
    e.preventDefault();
    const tbleObj = {
        table_capacity:document.querySelector("#avail-tables").value

    }
fetch("/api/owner/editTables", {
    method:"PUT",
    body:JSON.stringify(tbleObj),
    headers:{
        "content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
        alert("tables have been updated!");
        location.reload()
    }else{
        alert("something went wrong")
    }
})
document.querySelector("#update-table-form").classList.add("hide");

})
document.querySelector("#cancelupdateTble").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#update-table-form").classList.add("hide");
})

//Update business hours
document.querySelector("#updateHourBtn").addEventListener("click",e=>{
    document.querySelector("#update-hours-form").classList.remove("hide");
})

document.querySelector("#updateTime").addEventListener("click", (e) => {
    e.preventDefault();
    const tbleObj = {
        open_time:document.querySelector("#open-time").value,
        close_time:document.querySelector("#close-time").value,
    }
fetch("/api/owner/editTime", {
    method:"PUT",
    body:JSON.stringify(tbleObj),
    headers:{
        "content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
        // alert("Business hours have been updated!");
        href="/restaurants"
    }else{
        alert("something went wrong")
    }
})
document.querySelector("#update-hours-form").classList.add("hide");
href="/restaurants"

})
document.querySelector("#cancelupdateTime").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#update-hours-form").classList.add("hide");
})

