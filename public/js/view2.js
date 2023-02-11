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
            location.href="/customers"
        }else{
            alert("wrong email or password")
        }
    })
   
   
})

document.querySelector("#custSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const signupObj = {
        // name:document.querySelector("#custSignupName").value,
        email:document.querySelector("#custSignupEmail").value,
        password:document.querySelector("#custSignupPassword").value
    }
   
    fetch("/api/user/",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/customers"
        }else{
            alert("invalid email/passoword")
        }
    })

})