document.querySelector("#logout").addEventListener("click",e=>{
    e.preventDefault();

    fetch("/api/user/logout",{ 
        method:"DELETE",
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        location.href="/"
        
    })
})
