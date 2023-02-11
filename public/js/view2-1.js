document.querySelector("#custSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        name:document.querySelector("#custSignupName").value,
        email:document.querySelector("#custSignupEmail").value,
        password:document.querySelector("#custSignupPassword").value
    }
    console.log(loginObj)
    //TODO:Change for Sign-up
    fetch("/api/user/signup",{
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
