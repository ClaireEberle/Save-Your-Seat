document.querySelector("#custLoginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#custLoginEmail").value,
        password:document.querySelector("#custLoginPassword").value
    }
    fetch("/api/user/login",{ 
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("Sign in successfully.")
            location.href="/customers"
        }else{
            alert("wrong email or password")
        }
    })
   
   
})

