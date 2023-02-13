

document.querySelector(".show-edit-form").addEventListener("click",e=>{
    e.preventDefault();
        document.querySelector(`#menu-edit`).classList.remove("hide")

    })



document.querySelector("#save-dish").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        dishes : document.querySelector("#editDish").value,
        side : document.querySelector("#editSide").value,
    }
    fetch(`/api/dish`,{ //
        method:"GET",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    });
})