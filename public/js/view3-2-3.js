document.querySelector("#updateTble").addEventListener("click", (e) => {
    e.preventDefault();
    const tbleObj = {
        restaurant_name:ownerData.restaurant_name,
        //and other
        table_capacity:document.querySelector("#avail-tables").value,

    }
fetch("/api/owner", {
    method:"PUT",
    body:JSON.stringify(tbleObj),
    headers:{
        "content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
        alert("tables have been updated!");
        location.href="/restaurants"
    }
})
})
