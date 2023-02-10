document.querySelector("#make-reservation-form").addEventListener("submit",e=>{
  e.preventDefault();
  const customerObj = {
    available_date:document.querySelector("#datepicker").value,
    available_meal:document.querySelector("#party-time").value,
    table_capacity:document.querySelector("#party-size").value,
}
console.log(customerObj)
fetch("/makereservation",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
       console.log(res)
    } else {
        alert("trumpet sound")
    }
})

})



//Jquery function
//* datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  })

//* drop down
$( function() {
    $( "#speed" ).selectmenu();
})

