document.querySelector("#restSignupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const restSignupObj = {
        name:document.querySelector("#restSignupName").value,
        email:document.querySelector("#restSignupEmail").value,
        password:document.querySelector("#restSignupPassword").value,
        open_time:document.querySelector("#opentime").value,
        close_time:document.querySelector("#closetime").value
    }
    fetch("/api/owner",{ 
        method:"POST",
        body:JSON.stringify(restSignupObj),
        headers:{
            "content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("Welcome! Now you may sign-in");
            location.href="/restaurantLogin"
        }else{
            alert("wrong email or password")
        }
    })
    
})