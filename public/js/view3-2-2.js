document.querySelector("#show-edit-form").addEventListener("click",e=>{
    e.preventDefault();
        document.querySelector("#menu-edit").classList.remove("hide")

    })



document.querySelector("#save-dish").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        dishes : document.querySelector("#editDish").value,
        side : document.querySelector("#editSide").value,
    }
    fetch(`/api/dish/editdish`,{ //
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
document.querySelector("#add-dish").addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector("#dish-form-div").classList.remove("hide")
})
document.querySelector("#add-dish-form").addEventListener("submit",e=>{
    e.preventDefault();
const menuObj = {
    dishes: document.querySelector("#addDish").value,
    side: document.querySelector("#addSide").value
}
fetch("/api/dish",{
    method:"POST",
    body:JSON.stringify(menuObj),
    headers:{
        "Content-Type":"application/json"
    }
}).then((res)=>{
    if(res.ok){
        location.reload()
    }else{
        alert("something went wrong")
    }
})
document.querySelector("#save-new-dish").classList.add("hide")
})