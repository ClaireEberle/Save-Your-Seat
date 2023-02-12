document.querySelector("#edit-menu").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username : document.querySelector("#editDish").value,
        bio : document.querySelector("#editSide").value,
    }
    fetch(`/api/dish`,{ //
        method:"PUT",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})