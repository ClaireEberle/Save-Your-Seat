document.querySelector("#restLoginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#restLoginEmail").value,
        password:document.querySelector("#restLoginPassword").value
    }
    fetch("/api/owner/login",{ 
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/restaurants"
        }else{
            alert("wrong email or password")
        }
    })
  
})

document.querySelector("#restsignupBtn").addEventListener("click",e=>{
    e.preventDefault();
   location.href="/newrestaurant";
})

